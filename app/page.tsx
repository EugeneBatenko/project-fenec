import {Hero} from "@/app/components/Hero/Hero";
import {About} from "@/app/components/About/About";
import {Projects} from "@/app/components/Projects/Projects";
import {GetInTouch} from "@/app/components/GetInTouch/GetInTouch";

export default function Home() {
    return (
        <>
            <Hero/>
            <About/>
            <Projects/>
            <GetInTouch/>
        </>
    );
}
