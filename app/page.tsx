import {Hero} from "@/app/components/Hero/Hero";
import {AboutMe} from "@/app/components/AboutMe/AboutMe";
import {Projects} from "@/app/components/Projects/Projects";
import {GetInTouch} from "@/app/components/GetInTouch/GetInTouch";
import {HireMe} from "@/app/components/HireMe/HireMe";

export default function Home() {
    return (
        <>
            <Hero/>
            <AboutMe/>
            <Projects/>
            <GetInTouch/>
            <HireMe/>
        </>
    );
}
