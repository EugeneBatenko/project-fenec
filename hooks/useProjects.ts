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

export const useProjectMutation = () => {
    return {
        create: async (project: FormData) => {
            return await apiClient.post("/api/projects", project);
        },
        update: async (slug: string, project: ProjectItem) => {
            return await apiClient.put(`/api/projects/${slug}`, project);
        },
        delete: async (slug: string) => {
            return await apiClient.delete(`/api/projects/${slug}`);
        }
    };
}
