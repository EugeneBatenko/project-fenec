export type CvHeader = {
    _id?: string;
    title: string;
    order?: number;
}

export type CvSection = {
    _id?: string;
    title: string;
    content: string;
    order?: number;
}

export type MergedData = {
    headers: CvHeader[];
    sections: CvSection[];
}