import { QueryClient } from "@tanstack/react-query";

let queryClient: QueryClient;

export default function getQueryClient() {
    if (!queryClient) {
        queryClient = new QueryClient();
    }
    return queryClient;
}
