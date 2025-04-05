"use client"

import {useState} from "react";
import Link from "next/link";
import {useCvQuery} from "@/hooks/useCv";

import styles from "./cv.module.css"

import {CvHeader, CvItemType, CvSection} from "@/types";

import {Loading} from "@/ui/loading/Loading";
import Notice from "@/ui/notify/Notify";

import Markdown from "markdown-to-jsx";

const markDownOptions = {
    overrides: {
        a: { component: Link, props: { className: "link" } },
        ul: { props: { className: "ul" } },
        li: { props: { className: "li" } },
    },
};

export default function Page() {
    const { data, isLoading, isError, error } = useCvQuery();

    const [noticeMessage, setNoticeMessage] = useState("");
    const [noticeType, setNoticeType] = useState("info");

    // TODO: Add another loader with some "skeleton" animation
    if(isLoading) return <Loading/>;

    if(isError) {
        setNoticeMessage(error?.message || "Error")
        setNoticeType("error")
    }

    return (
        <section className={`${styles.cvPage} bg-section mb-5`}>
            {noticeMessage && (
                <Notice
                    type={noticeType}
                    message={noticeMessage}
                    dismissible
                />
            )}
            <div className="container-fluid bg-section-darker">
                <div className="row">
                    <div className="col text-center p-5">
                        {Array.isArray(data) &&
                            data.map((header: CvHeader) => {
                                if (header.type !== CvItemType.HEADER) return null;
                                const HeadingTag = `h${Math.min(header.order + 1, 6)}` as keyof JSX.IntrinsicElements;
                                return (
                                    <HeadingTag key={header._id} className="mb-2">
                                        {header.title}
                                    </HeadingTag>
                                );
                            })}
                    </div>
                </div>
            </div>

            <div className="container py-3">
                {Array.isArray(data) && data.map((section: CvSection) => {
                    if (section.type !== CvItemType.SECTION && section.type !== CvItemType.DOUBLE_SECTION) return null;
                    return (
                        <div key={section._id} className="row mb-3">
                            <h2>{section.title}</h2>
                            {section.title && <hr className="my-2"/>} {/* Only show hr if there is a title */}
                            {section.type === CvItemType.DOUBLE_SECTION ? (
                                <>
                                    <div className="col-md-6">
                                        <Markdown options={markDownOptions}>{section.content}</Markdown>
                                    </div>
                                    <div className="col-md-6">
                                        <Markdown options={markDownOptions}>{section.secondaryContent ?? ""}</Markdown>
                                    </div>
                                </>
                            ) : (
                                <div className="col">
                                    <Markdown options={markDownOptions}>{section.content}</Markdown>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
