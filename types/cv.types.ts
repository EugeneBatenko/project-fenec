import {CvItemType} from "@/types/enum";

export type CvHeader = {
    _id?: string;
    title: string;
    order: number;
    type: string;
}

export type CvSection = {
    _id?: string;
    title: string;
    content: string;
    order: number;
    type: CvItemType.SECTION | CvItemType.DOUBLE_SECTION;
    secondaryContent?: string;
}

export type MergedData = {
    headers: CvHeader[];
    sections: CvSection[];
}