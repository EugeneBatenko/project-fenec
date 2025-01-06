import getQueryClient from "@/hooks/getQueryClient";
import {dehydrate} from "@tanstack/query-core";
import {HydrationBoundary} from "@tanstack/react-query";
import {fetchProjectsAll} from "@/fetch/fetchProjectsAll";

import {HeroPortfolio} from "@/components/HeroPortfolio/HeroPortfolio";
import {PortfolioSection} from "@/components/PortfolioSection/PortfolioSection";

export default async function Page() {
    const queryClient = getQueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["projects"],
        queryFn: async () => fetchProjectsAll(),
        staleTime: 1000 * 60 * 60, // 1 hour
    });

    const dehydratedState = dehydrate(queryClient);

    return (
        <>
            <HeroPortfolio/>
            <HydrationBoundary state={dehydratedState}>
                <PortfolioSection/>
            </HydrationBoundary>
        </>
    );
}
