import apiClient from "@/providers/apiClient";
import { useMutation } from "@tanstack/react-query";
import { UserAgent } from "@/types";

export const useStatsMutation = () => {
  return useMutation({
    mutationFn: async (data: UserAgent) => {
      return await apiClient.post("/api/stats", data);
    },
    onError: (error: never) => {
      console.error("Error logging user download:", error);
    }
  })
};
