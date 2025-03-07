import {QueryFunction, useQuery, UseQueryOptions} from "@tanstack/react-query";

type QueryConfig<TData> = {
    queryKey: readonly unknown[];
    queryFn: QueryFunction<TData, readonly unknown[]>;
};

export const useCustomQuery = <TData,>(
    config: QueryConfig<TData>,
    options?: Omit<UseQueryOptions<TData, Error>, "queryKey" | "queryFn">
) => {
    return useQuery<TData, Error>({
        ...options,
        queryKey: config.queryKey,
        queryFn: config.queryFn,
        retry: false,
        refetchOnWindowFocus: false,
        refetchInterval: false,
    });
};