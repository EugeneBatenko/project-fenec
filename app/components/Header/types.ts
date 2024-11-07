import {FC} from "react";

export type NavItem = {
    itemName: string,
    pathname: string,
    icon?: FC,
}

export type NavProps = {
    classNameUl?: string;
    classNameLink: string;
    classNameLinkActive: string;
    classNameMarker: string;
    classNameText: string;
    isMobile: boolean;
}