"use client";

import { FC, FormEvent, useEffect, useState } from "react";
import {useCvDeleteMutation, useCvMutation, useCvQuery} from "@/hooks/useCv";

import Notice from "@/components/ui/notify/Notify";
import { HeaderSections } from "./HeaderSections";
import { MainSections } from "./MainSections";

import {CvHeader, CvItemType, CvSection} from "@/types";

import { FormButton } from "@/ui/buttons/FormButton";

// TODO Simplify this component later
export const CvEditor: FC = () => {
    const mutation = useCvMutation();
    const deleteMutation = useCvDeleteMutation();
    const { data: cvItems, isLoading, isError } = useCvQuery();

    const [noticeMessage, setNoticeMessage] = useState("");
    const [noticeType, setNoticeType] = useState("info");

    const [headerSections, setHeaderSections] = useState<CvHeader[]>([
        {
            title: "",
            order: 0,
            type: CvItemType.HEADER
        },
    ]);
    const [sections, setSections] = useState<CvSection[]>([
        {
            title: "", content: "",
            order: 0,
            type: CvItemType.SECTION
        },
    ]);

    useEffect(() => {
        if (cvItems && Array.isArray(cvItems)) {
            const fetchedHeaders = cvItems
                .filter((item) => item.type?.toLowerCase() === CvItemType.HEADER)
                .map((item) => ({ ...item }));

            const fetchedSections = cvItems
                .filter((item) => item.type?.toLowerCase() === CvItemType.SECTION || item.type?.toLowerCase() === CvItemType.DOUBLE_SECTION)
                .map((item) => ({ ...item }));

            setHeaderSections(fetchedHeaders);
            setSections(fetchedSections);
        }
    }, [cvItems]);

    const handleAddHeaderSection = () => {
        setHeaderSections((prev) => [
            ...prev,
            { title: "", order: prev.length, type: CvItemType.HEADER },
        ]);
    };

    const handleRemoveHeaderSection = (index: number) => {
        setHeaderSections((prev) => prev.filter((_, i) => i !== index));
    };

    const handleHeaderTitleChange = (index: number, newTitle: string) => {
        setHeaderSections((prev) =>
            prev.map((header, i) => (i === index ? { ...header, title: newTitle } : header))
        );
    };

    const handleAddSection = () => {
        setSections((prev) => [
            ...prev,
            { title: "", content: "", order: prev.length, type: CvItemType.SECTION }
        ]);
    };

    const handleRemoveSection = (index: number) => {
        const sectionToDelete = sections[index];

        if(!confirm(`Are you sure to delete ${sectionToDelete.title}?`)) {
            return;
        }

        if (sectionToDelete && sectionToDelete._id) {
            deleteMutation.mutate(sectionToDelete._id, {
                onSuccess: () => {
                    setSections((prev) => prev.filter((_, i) => i !== index));
                    setNoticeMessage("Section deleted successfully.");
                    setNoticeType("success");
                },
                onError: (error) => {
                    setNoticeMessage("Error deleting section. Please try again.");
                    setNoticeType("error");
                    console.error(error);
                }
            });
        } else {
            setSections((prev) => prev.filter((_, i) => i !== index));
            setNoticeMessage("Section removed locally.");
            setNoticeType("info");
        }
    };

    const handleMoveSectionUp = (index: number) => {
        if (index <= 0) return;
        setSections((prev) => {
            const reordered = [...prev];
            [reordered[index - 1], reordered[index]] = [reordered[index], reordered[index - 1]];
            return reordered;
        });
    };

    const handleMoveSectionDown = (index: number) => {
        setSections((prev) => {
            if (index < 0 || index >= prev.length - 1) return prev;
            const reordered = [...prev];
            [reordered[index], reordered[index + 1]] = [reordered[index + 1], reordered[index]];
            return reordered;
        });
    };

    const handleSectionTitleChange = (index: number, newTitle: string) => {
        setSections((prev) =>
            prev.map((section, i) => (i === index ? { ...section, title: newTitle } : section))
        );
    };

    const handleSectionContentChange = (index: number, newContent: string) => {
        setSections((prev) =>
            prev.map((section, i) => (i === index ? { ...section, content: newContent } : section))
        );
    };

    const handleAddDoubleSection = () => {
        setSections((prev) => [
            ...prev,
            {
                title: "",
                content: "",
                secondaryContent: "",
                order: prev.length,
                type: CvItemType.DOUBLE_SECTION,
            },
        ]);
    };

    const handleSecondaryContentChange = (index: number, newContent: string) => {
        setSections((prev) =>
            prev.map((section, idx) =>
                idx === index ? { ...section, secondaryContent: newContent } : section
            )
        );
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const finalHeaders = headerSections.map((header, index) => ({
            ...header,
            order: index,
        }));
        const finalSections = sections.map((section, index) => ({
            ...section,
            order: index,
        }));

        const mergedData = {
            headers: finalHeaders,
            sections: finalSections,
        };

        console.log("Submitting merged data with order:", mergedData);

        await mutation.mutateAsync(mergedData);
        setNoticeMessage("Form successfully submitted!");
        setNoticeType("success");
    };

    return (
        <section className="container my-5 py-5">
            <div className="row">
                <div className="col">
                    {noticeMessage && (
                        <Notice
                            type={noticeType}
                            message={noticeMessage}
                            dismissible
                        />
                    )}

                    <h1 className="text-center mb-3">CV Editor</h1>

                    {isLoading && <div>Loading existing CV items...</div>}
                    {isError && <div>Failed to load CV items.</div>}

                    <form onSubmit={handleSubmit}>
                        <HeaderSections
                            headerSections={headerSections}
                            onAddHeaderSection={handleAddHeaderSection}
                            onRemoveHeaderSection={handleRemoveHeaderSection}
                            onTitleChange={handleHeaderTitleChange}
                        />

                        <MainSections
                            sections={sections}
                            onAddSection={handleAddSection}
                            onAddDoubleSection={handleAddDoubleSection}
                            onRemoveSection={handleRemoveSection}
                            onMoveSectionUp={handleMoveSectionUp}
                            onMoveSectionDown={handleMoveSectionDown}
                            onTitleChange={handleSectionTitleChange}
                            onContentChange={handleSectionContentChange}
                            onSecondaryContentChange={handleSecondaryContentChange}
                        />

                        <br />
                        <FormButton
                            name="Submit"
                            loading={mutation.isPending}
                            error={mutation.isError}
                            success={mutation.isSuccess}
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};