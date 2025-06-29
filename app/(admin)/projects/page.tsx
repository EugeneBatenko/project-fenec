import { prefetchProjects } from "@/helpers/prefetch/prefetchProjects";
import { HydrationBoundary } from "@tanstack/react-query";
import { ProjectsPanel } from "./list";

export default function Page() {
  const dehydratedState = prefetchProjects();

  return (
    <HydrationBoundary state={dehydratedState}>
      <ProjectsPanel />
    </HydrationBoundary>
  );
}