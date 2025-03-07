"use client"

import {FC, useRef, useState} from "react";
import styles from "./portfolio-section.module.css";
import dynamic from "next/dynamic";
import {Loading} from "@/components/PortfolioSection/Loading";

type ContentType = "Projects" | "Codepen" | null;

const DynamicProjectsList = dynamic(() => import("@/components/Projects/ProjectsList").then((m) => m.ProjectsList), {
    loading: () => <Loading/>,
});
const DynamicCodepen = dynamic(() => import("@/components/Codepen/Codepen").then((m) => m.Codepen), {
    loading: () => <Loading/>,
});

export const PortfolioSection: FC = () => {
    const [selectedOption, setSelectedOption] = useState<ContentType>("Projects");
    const inputRef = useRef<ContentType>("Projects");

    const handleChange = (option: ContentType) => {
        inputRef.current = selectedOption;
        setSelectedOption(option);
    }

    // TODO https://nextjs.org/docs/app/building-your-application/routing/parallel-routes
    const renderContent = () => {
        if (selectedOption === "Projects") return <DynamicProjectsList />;
        if (selectedOption === "Codepen") return <DynamicCodepen />;
        return null;
    };

    return (
        <section>
            <div className="container mb-5">
                <div className="row">
                    <div className={`${styles.buttonPanel} col text-center`}>
                        <input
                            id="projects"
                            name="switch"
                            type="radio"
                            value="Projects"
                            checked={selectedOption === "Projects"}
                            onChange={() => handleChange("Projects")}
                            className={styles.input}
                        />
                        <label htmlFor="projects" className={styles.option}>Projects</label>

                        <input
                            id="codepen"
                            name="switch"
                            type="radio"
                            value="Codepen"
                            checked={selectedOption === "Codepen"}
                            onChange={() => handleChange("Codepen")}
                            className={styles.input}
                        />
                        <label htmlFor="codepen" className={styles.option}>Codepen</label>
                    </div>
                </div>
            </div>

            <div className="container mb-5">
                <div className="row">
                    <div className="col">
                        {renderContent()}
                    </div>
                </div>

            </div>
        </section>
    )
}
