import {Hero} from "@/components/Hero/Hero";
import {AboutMe} from "@/components/AboutMe/AboutMe";
import {FeaturedProjects} from "@/components/FeaturedProjects/FeaturedProjects";
import {GetInTouch} from "@/components/GetInTouch/GetInTouch";
import {HireMe} from "@/components/HireMe/HireMe";

export default function Home() {
    return (
        <>
            <Hero/>
            <AboutMe/>
            <FeaturedProjects/>
            <GetInTouch/>
            <HireMe/>
        </>
    );
}
