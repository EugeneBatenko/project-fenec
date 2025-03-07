import {FC} from "react";
import Placeholder from "@/public/placeholder-fennec-fox.svg";
import styles from "./projects.module.css";
import Link from "next/link";

import Image from "next/image";
import {ProjectsLoading} from "@/components/Projects/Loading";
import {ProjectItem} from "@/types";
import {useProjects} from "@/hooks/useProjects";

export const ProjectsList: FC = () => {
    const { data, isLoading, isError, error } = useProjects();

    if(isLoading) return <ProjectsLoading/>
    if(isError) return <div className="alert alert-danger" role="alert"><p>Error: {error?.message}</p></div>

    return (
        <article className={styles.body}>
            {data?.map((project: ProjectItem) => (
                <div key={project.id} className={styles.card}>
                    <div className={styles.imageContainer}>
                        {project.image ? <Image
                                src={`${process.env.BLOB_URL}/${project.image}`}
                                alt={project.name}
                                className={styles.image}
                                quality={75}
                                fill
                                loading='lazy'
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center"
                                }}
                            /> :
                            <Placeholder
                                fill="#fff"
                                className={styles.placeholder}
                            />}
                    </div>
                    <div className={styles.content}>
                        <h3 className={`${styles.title} h3 mb-2`}>{project.name}</h3>
                        <h6 className="h6 mb-2">Period: {project.period}</h6>
                        <div className={styles.types}>
                            {project.types.map((type: string) => (
                                <span key={type} className={styles.type} data-project-type={type}>{type}</span>
                            ))}
                        </div>
                        <p className={styles.text}>{project.description}</p>
                        <Link href={`/portfolio/${project.slug}`} className={styles.button}>Read More &gt;&gt;</Link>
                    </div>
                    <div className={styles.tags}>
                        {/*TODO Remove slice after backand will be added*/}
                        {project.tags.slice(0, 3).map((tag: string) => (
                            <span key={tag} className={styles.tag}>#{tag}</span>
                        ))}
                    </div>
                </div>
            ))}

            {/*<div className={styles.card}>*/}
            {/*    <Placeholder fill="#fff" className={styles.image}/>*/}

            {/*    <div className={styles.content}>*/}
            {/*        <h3 className={`${styles.title} h3 mb-2`}>Project name</h3>*/}

            {/*        <h6 className="h6 mb-2">Period: Sep - Dec 2018</h6>*/}

            {/*        <div className={styles.types}>*/}
            {/*            <span className={styles.type} data-project-type="commercial">Commercial</span>*/}
            {/*            <span className={styles.type} data-project-type="full-time">Full-Time</span>*/}
            {/*            <span className={styles.type} data-project-type="frontend">Front-End</span>*/}
            {/*        </div>*/}

            {/*        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium*/}
            {/*            beatae harum molestiae nobis odit rerum. Delectus illo nam voluptas?</p>*/}
            {/*        <Link className={styles.button} href={'/'}>Read More &gt;&gt;</Link>*/}
            {/*    </div>*/}

            {/*    <div className={styles.tags}>*/}
            {/*        <span className={styles.tag}>#html</span>*/}
            {/*        <span className={styles.tag}>#css</span>*/}
            {/*        <span className={styles.tag}>#javascipt</span>*/}
            {/*        <span className={styles.tag}>#gulp</span>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </article>
    )
}
