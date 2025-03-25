import {FC, ChangeEvent} from "react";
import {CvHeader} from "@/types";

import styles from "./cv-editor.module.css";
import { MdClose } from "react-icons/md";
import { MdAdd } from "react-icons/md";

type HeaderSectionsProps = {
    headerSections: CvHeader[];
    onAddHeaderSection: () => void;
    onRemoveHeaderSection: (id: number) => void;
    onTitleChange: (id: number, newTitle: string) => void;
}

export const HeaderSections: FC<HeaderSectionsProps> = ({
    headerSections,
    onAddHeaderSection,
    onRemoveHeaderSection,
    onTitleChange,
}) => {

    return (
        <article className={styles.headersSection}>
            <h2 className="text-center mb-3">Header Sections</h2>
            {headerSections.map((header, index) => (
                <div className={styles.line} key={index} style={{marginBottom: "1rem"}}>
                    <label>
                        <input
                            type="text"
                            value={header.title}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                onTitleChange(index, e.target.value)
                            }
                        />
                    </label>
                    <button className={styles.removeButton} type="button" onClick={() => onRemoveHeaderSection(index)}>
                        <MdClose size={32}/>
                    </button>
                </div>
            ))}

            <button className={styles.addButton} type="button" onClick={onAddHeaderSection}>
                <MdAdd size={32}/>
            </button>
        </article>
    );
};