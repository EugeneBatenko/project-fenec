import {ReactNode} from "react";

export type TabProps = {
    label: string;
    children: ReactNode;
    classNameTab?: string;
}

export type TabsClassName = {
    tabs?: string;
    panel?: string;
    content?: string;
}

export type TabsProps = {
    children: ReactNode;
    classNames?: TabsClassName;
}