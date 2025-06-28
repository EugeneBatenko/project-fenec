import { useCustomQuery } from "@/hooks/useCustomQuery";
import { TagsItem, TagTypeEnum, TagTypes } from "@/types";
import apiClient from "@/providers/apiClient";
import { useMutation } from "@tanstack/react-query";

export const useTags = (filters?: { type?: TagTypeEnum }) => {
  return useCustomQuery<TagsItem[]>({
    queryKey: ["tags", filters],
    queryFn: async () => {
      const queryParams = filters?.type ? `?type=${filters.type}` : "";
      const tags = await apiClient.get<TagsItem[]>(`/api/tags${queryParams}`);
      return tags || [];
    }
  });
};

export const useTagsMutation = () => {
  return useMutation({
    mutationFn: async (tag: TagTypes) => {
      return await apiClient.post("/api/tags", tag);
    },
    onError: (error: never) => {
      console.error("Error creating tag:", error);
    },
  })
}
