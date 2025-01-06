
import getQueryClient from "@/hooks/getQueryClient";
import {HydrationBoundary} from "@tanstack/react-query";
import {fetchProjectBySlug} from "@/fetch/fetchProjectsAll";
import {dehydrate} from "@tanstack/query-core";

import {Project} from "@/components/Projects/Project";

export default async function Page({params}: {params: {slug: string}}) {
    const slug: string = (params).slug;

    const queryClient = getQueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["projects", slug],
        queryFn: async () => fetchProjectBySlug(slug),
        staleTime: 1000 * 60 * 60, // 1 hour
    });

    const dehydratedState = dehydrate(queryClient);

    return (
        <HydrationBoundary state={dehydratedState}>
            <Project slug={slug}/>
        </HydrationBoundary>
    )
}
