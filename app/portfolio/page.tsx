import {HydrationBoundary} from "@tanstack/react-query";

import {HeroPortfolio} from "@/components/HeroPortfolio/HeroPortfolio";
import {PortfolioSection} from "@/components/PortfolioSection/PortfolioSection";
import {prefetchProjects} from "@/helpers/prefetch/prefetchProjects";

export default async function Page() {
    const dehydratedState = await prefetchProjects();

    return (
        <>
            <HeroPortfolio/>
            <HydrationBoundary state={dehydratedState}>
                <PortfolioSection/>
            </HydrationBoundary>
        </>
    );
}
