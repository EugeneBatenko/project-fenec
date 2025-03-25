import {FC, ChangeEvent} from "react";
import {CvSection} from "@/types";

import styles from "./cv-editor.module.css";
import Textarea from "@/ui/textarea/Textarea";
import {MdClose} from "react-icons/md";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

type MainSectionsProps = {
    sections: CvSection[];
    onAddSection: () => void;
    onAddDoubleSection: () => void;
    onRemoveSection: (index: number) => void;
    onMoveSectionUp: (index: number) => void;
    onMoveSectionDown: (index: number) => void;
    onTitleChange: (index: number, newTitle: string) => void;
    onContentChange: (index: number, newContent: string) => void;
    onSecondaryContentChange: (index: number, newContent: string) => void;
}

export const MainSections: FC<MainSectionsProps> = ({
    sections,
    onAddSection,
    onAddDoubleSection,
    onRemoveSection,
    onMoveSectionUp,
    onMoveSectionDown,
    onTitleChange,
    onContentChange,
   onSecondaryContentChange
}) => {
    return (
        <article className={styles.mainSections}>
            <h2 className="text-center mb-3">Main Sections</h2>
            {sections.map((section, index) => (
                <div className={styles.line} key={index} style={{marginBottom: "1rem"}}>
                    <div className={styles.textareaGroup}>
                        <label className={styles.headerLabel}>
                            <input
                                type="text"
                                value={section.title}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    onTitleChange(index, e.target.value)
                                }
                            />
                        </label>

                        <div className={`${section.type === "double-section" && styles.doubleLine}`}>
                            <label className={styles.contentLabel}>
                                <Textarea value={section.content}
                                          onChange={(e) =>
                                              onContentChange(index, e.target.value)}
                                          className={styles.textarea}
                                />
                            </label>

                            {section.type === "double-section" && (
                                <label className={styles.contentLabel}>
                                    <Textarea
                                        value={section.secondaryContent || ''}
                                        onChange={(e) =>
                                            onSecondaryContentChange(index, e.target.value)
                                        }
                                        className={styles.textarea}
                                    />
                                </label>
                            )}
                        </div>
                    </div>

                    <div className={styles.buttonGroup}>
                        <button className={styles.removeButton} type="button" onClick={() => onRemoveSection(index)}>
                            <MdClose size={32}/>
                        </button>
                        <button className={styles.orderButton} type="button" onClick={() => onMoveSectionUp(index)}>
                            <FaChevronUp size={20}/>
                        </button>
                        <button className={styles.orderButton} type="button" onClick={() => onMoveSectionDown(index)}>
                            <FaChevronDown size={20}/>
                        </button>
                    </div>
                </div>
            ))}

            <div style={{ display: "flex", gap: "8px" }}>
                <button className={styles.addButton} type="button" onClick={onAddSection}>
                    Single Column
                </button>
                <button className={styles.addButton} type="button" onClick={onAddDoubleSection}>
                    Double Column
                </button>
            </div>

        </article>
    );
};