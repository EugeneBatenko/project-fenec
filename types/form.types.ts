import {ChangeEvent, FormEvent, ReactNode} from "react";

export type InputProps = {
    type?: string;
    name?: string;
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    required?: boolean;
    disabled?: boolean;
}

export type FormProps = {
    children: ReactNode,
    onSubmit?: (e: FormEvent<HTMLFormElement>) => void,
    action?: (e: FormEvent) => Promise<void>
}
