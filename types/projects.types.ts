import { TagTypes } from "@/types/tags.types";

export type ProjectItem = {
    _id: string;
    name: string;
    description: string;
    image: string;
    start_date: string;
    end_date: string;
    slug: string;
    tags: TagTypes[];
}

export type ProjectPageType = {
    _id: string;
    name: string;
    description: string;
    image: string;
    start_date: string;
    end_date: string;
    role: string;
    responsibilities: string;
    tags: TagTypes[];
}
