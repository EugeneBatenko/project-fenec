// MainSections.tsx
import { FC, ChangeEvent } from "react";
import { CvSection } from "@/types";

type MainSectionsProps = {
    sections: CvSection[];
    onAddSection: () => void;
    onRemoveSection: (index: number) => void;
    onMoveSectionUp: (index: number) => void;
    onMoveSectionDown: (index: number) => void;
    onTitleChange: (index: number, newTitle: string) => void;
    onContentChange: (index: number, newContent: string) => void;
}

export const MainSections: FC<MainSectionsProps> = ({
    sections,
    onAddSection,
    onRemoveSection,
    onMoveSectionUp,
    onMoveSectionDown,
    onTitleChange,
    onContentChange,
}) => {
    return (
        <div>
            <h2>Main Sections</h2>
            {sections.map((section, index) => (
                <div key={index} style={{ marginBottom: "1rem" }}>
                    <label>
                        Section Title
                        <input
                            type="text"
                            value={section.title}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                onTitleChange(index, e.target.value)
                            }
                        />
                    </label>
                    <label>
                        Content
                        <textarea
                            value={section.content}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                                onContentChange(index, e.target.value)
                            }
                        />
                    </label>
                    <button type="button" onClick={() => onRemoveSection(index)}>
                        Remove
                    </button>
                    <button type="button" onClick={() => onMoveSectionUp(index)}>
                        Move Up
                    </button>
                    <button type="button" onClick={() => onMoveSectionDown(index)}>
                        Move Down
                    </button>
                </div>
            ))}

            <button type="button" onClick={onAddSection}>
                Add Section
            </button>
        </div>
    );
};