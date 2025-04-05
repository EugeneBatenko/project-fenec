import {ReactNode} from "react";

export type AccordionContentTypes = {
    id: number;
    children: ReactNode;
    className?: string;
}

export type AccordionToggleProps = {
    id: number;
    className?: string;
    open?: string | ReactNode;
    close?: string | ReactNode;
}
