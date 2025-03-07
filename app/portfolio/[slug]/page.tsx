import {HydrationBoundary} from "@tanstack/react-query";

import {Project} from "@/components/Projects/Project";
import {prefetchProjectBySlug} from "@/helpers/prefetch/prefetchProjects";

export default async function Page({params}: {params: {slug: string}}) {
    const slug: string = (params).slug;

    const dehydratedState = await prefetchProjectBySlug(slug);

    return (
        <HydrationBoundary state={dehydratedState}>
            <Project slug={slug}/>
        </HydrationBoundary>
    )
}
