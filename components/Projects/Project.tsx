"use client"

import {FC} from "react";

import {notFound} from "next/navigation";
import Image from "next/image";

import styles from "./project.module.css";

import Placeholder from "@/public/placeholder-fennec-fox.svg";

import {useProjectBySlug} from "@/hooks/useProjects";

export const Project: FC<{ slug: string }> = (props) => {
    const {data, isLoading, isError, error} = useProjectBySlug(props.slug);

    if (isLoading) return <div>Loading...</div>
    if(!data) return notFound();
    if (isError) return <div>Error: {error?.message}</div>


    return (
        <>
            <section className="container-fluid mb-5">
                <div className="row">
                    <div className="col p-0">
                        <div className={styles.imageContainer}>
                            {data.image ? <Image
                                src={`${process.env.BLOB_URL}/${data.image}`}
                                alt="Bannner"
                                quality={100}
                                fill
                                loading='lazy'
                                sizes="(width > 768px) 100vw, 50vw"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                            /> : <Placeholder
                                fill="#fff"
                                className={styles.placeholder}
                            /> }

                            <h1 className={`${styles.title} header-shadow header-line`}>{data.name}</h1>
                        </div>


                    </div>
                </div>
            </section>

            <section className="container mb-5">
                <div className="row">
                    <div className="col">
                        <h2 className={`${styles.sectionTitles} h2`}>Description</h2>
                        <h6>Period: {data.period}</h6>
                        <p>{data.description}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h2 className={`${styles.sectionTitles} h2`}>Role & Responsibilities</h2>
                        <h6>Role: {data.role}</h6>
                        <p><span className="fw-bold">Responsibilities:</span> {data.responsibilities}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h2 className={`${styles.sectionTitles} h2`}>Technology Stack</h2>
                        <div className={styles.tagsContainer}>
                            {data.tags.map((item, index) =>
                                <span key={index} className={styles.techTags}>{item}</span>
                            )}
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
