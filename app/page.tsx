import {Hero} from "@/app/components/Hero/Hero";
import {AboutMe} from "@/app/components/AboutMe/About";
import {Projects} from "@/app/components/Projects/Projects";
import {GetInTouch} from "@/app/components/GetInTouch/GetInTouch";

export default function Home() {
    return (
        <>
            <Hero/>
            <AboutMe/>
            <Projects/>
            <GetInTouch/>
        </>
    );
}
