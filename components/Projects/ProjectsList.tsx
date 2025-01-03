import {FC} from "react";
import Placeholder from "@/public/placeholder-fennec-fox.svg";
import styles from "./projects.module.css";
import Link from "next/link";

import {useQuery} from "@tanstack/react-query";
import Image from "next/image";
import {ProjectsLoading} from "@/components/Projects/Loading";

type ProjectItem = {
    id: number;
    name: string;
    description: string;
    image: string;
    period: string;
    slug: string;
    types: string[];
    tags: string[];
}

const fetchUsers = async(): Promise<ProjectItem[]> => {
    const res: Response = await fetch('/api/projects', {
        headers: {
            'Cache-Control': 'public, max-age=86400, immutable' // 24 hours
        }
    });
    if (!res.ok) throw new Error("Failed to fetch users");
    const data = await res.json();
    return data.projects;
}

export const ProjectsList: FC = () => {

    const { data, isLoading, isError, error } = useQuery<ProjectItem[], Error>({
        queryKey: ['projects'],
        queryFn: async () => fetchUsers()
    });

    if(isLoading) return <ProjectsLoading/>
    if(isError) return <div>Error: {error?.message}</div>

    return (
        <article className={styles.body}>
            {data?.map((project: ProjectItem) => (
                <div key={project.id} className={styles.card}>
                    {project.image ? <Image
                        src={project.image}
                        alt={project.name}
                        className={styles.image}
                        quality={75}
                        width={800}
                        height={200}
                        loading='lazy'
                        style={{
                            objectFit: "cover",
                            objectPosition: "center"
                        }}
                        /> :
                        <Placeholder
                            fill="#fff"
                            className={styles.placeholder}
                        />}
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
                        {project.tags.map((tag: string) => (
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
