import apiClient from "@/providers/apiClient";
import { ProjectItem, ProjectPageType } from "@/types";
import {useCustomQuery} from "@/hooks/useCustomQuery";

export const useProjects = () => {
    return useCustomQuery<ProjectItem[]>({
        queryKey: ["projects"],
        queryFn: async () => {
            const { projects } = await apiClient.get<{ projects: ProjectItem[] }>("/api/projects");
            return projects;
        },
    });
};

export const useProjectBySlug = (slug: string) => {
    return useCustomQuery<ProjectPageType>({
        queryKey: ["project", slug],
        queryFn: async () => {
            return await apiClient.get<ProjectPageType>(`/api/projects/${slug}`);
        },
    });
};
