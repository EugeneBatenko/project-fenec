import {ChangeEvent, useRef, useEffect, FC} from "react";

type TextareaProps = {
    value: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
};

const Textarea: FC<TextareaProps> = ({ value, onChange, className }) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, [value]);

    return (
        <textarea
            ref={textareaRef}
            value={value}
            onChange={onChange}
            className={className}
            style={{ overflow: "hidden", resize: "none" }}
        />
    );
};

export default Textarea;
