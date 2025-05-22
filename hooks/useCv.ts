import apiClient from "@/providers/apiClient";
import {useCustomQuery} from "@/hooks/useCustomQuery";

export const useCvQuery = () => {
  return useCustomQuery<Blob>({
    queryKey: ["cv-pdf"],
    queryFn: async () => {
      return await apiClient.get<Blob>("/api/cv", {}, true);
    }
  });
};
