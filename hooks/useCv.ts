import {useMutation, useQuery} from "@tanstack/react-query";
import apiClient from "@/providers/apiClient";
import { MergedData } from "@/types";
import {useCustomQuery} from "@/hooks/useCustomQuery";

export const useCvMutation = () => {
    return useMutation({
        mutationFn: async (data: MergedData) => {
            return await apiClient.post("/api/cv", data);
        },
    });
};

export const useCvQuery = () => {
    return useCustomQuery<MergedData>({
        queryKey: ["cv-items"],
        queryFn: async () => {
            return await apiClient.get<MergedData>("/api/cv");
        },
    });
};


