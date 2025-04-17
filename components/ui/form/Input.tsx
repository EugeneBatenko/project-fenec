import {FC, useId} from "react";
import {InputProps} from "@/types";


export const Input: FC<InputProps> = ({type = "text", label, name, placeholder, onChange, value, className}) => {
    const id = useId();

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={className}
            />
        </>
    )
}
