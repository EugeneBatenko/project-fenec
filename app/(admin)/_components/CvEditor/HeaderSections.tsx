// HeaderSections.tsx
import {FC, ChangeEvent} from "react";
import {CvHeader} from "@/types";

type HeaderSectionsProps = {
    headerSections: CvHeader[];
    onAddHeaderSection: () => void;
    onRemoveHeaderSection: (index: number) => void;
    onTitleChange: (index: number, newTitle: string) => void;
}

export const HeaderSections: FC<HeaderSectionsProps> = ({
    headerSections,
    onAddHeaderSection,
    onRemoveHeaderSection,
    onTitleChange,
}) => {
    return (
        <div>
            <h2>Header Sections</h2>
            {headerSections.map((header, index) => (
                <div key={index} style={{marginBottom: "1rem"}}>
                    <label>
                        Header Input
                        <input
                            type="text"
                            value={header.title}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                onTitleChange(index, e.target.value)
                            }
                        />
                    </label>
                    <button type="button" onClick={() => onRemoveHeaderSection(index)}>
                        Remove
                    </button>
                </div>
            ))}

            <button type="button" onClick={onAddHeaderSection}>
                Add Header Section
            </button>
        </div>
    );
};