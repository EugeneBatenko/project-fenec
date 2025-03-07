import { dehydrate } from "@tanstack/query-core";
import getQueryClient from "@/hooks/getQueryClient";
import apiClient from "@/providers/apiClient";
import { ProjectItem, ProjectPageType } from "@/types";

const prefetchData = async (
    queryKey: string[],
    queryFn: () => Promise<unknown>,
    staleTime: number = 1000 * 60 * 60 // Default to 1 hour
) => {
    const queryClient = getQueryClient();

    await queryClient.prefetchQuery({
        queryKey,
        queryFn,
        staleTime,
    });

    return dehydrate(queryClient);
};

export const prefetchProjects = async () => {
    return prefetchData(
        ["projects"],
        async () => {
            const { projects } = await apiClient.get<{ projects: ProjectItem[] }>("/api/projects");
            return projects;
        }
    );
};

export const prefetchProjectBySlug = async (slug: string) => {
    return prefetchData(
        ["projects", slug],
        async () => {
            return await apiClient.get<ProjectPageType>(`/api/projects/${slug}`);
        }
    );
};
