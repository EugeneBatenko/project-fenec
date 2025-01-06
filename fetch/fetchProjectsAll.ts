import {ProjectItem, ProjectPageType} from "@/types";

export const fetchProjectsAll = async(): Promise<ProjectItem[]> => {
    const res: Response = await fetch('/api/projects', {
        headers: {
            'Cache-Control': 'public, max-age=86400, immutable' // 24 hours
        }
    });
    if (!res.ok) throw new Error("Failed to fetch projects");
    const data = await res.json();
    return data.projects;
}

export const fetchProjectBySlug = async (slug: string): Promise<ProjectPageType> => {
    const res: Response = await fetch(`/api/projects/${slug}`, {
        headers: {
            'Cache-Control': 'public, max-age=86400, immutable' // 24 hours
        }
    });
    if (!res.ok) throw new Error(res.statusText);
    return await res.json();
}
