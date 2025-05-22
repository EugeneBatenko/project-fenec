import {HydrationBoundary} from "@tanstack/react-query";

import {Project} from "@/components/Projects/Project";
import {prefetchProjectBySlug} from "@/helpers/prefetch/prefetchProjects";

export default async function Page(props: {params: Promise<{slug: string}>}) {
    const params = await props.params;
    const slug: string = (params).slug;

    const dehydratedState = await prefetchProjectBySlug(slug);

    return (
        <HydrationBoundary state={dehydratedState}>
            <Project slug={slug}/>
        </HydrationBoundary>
    )
}
