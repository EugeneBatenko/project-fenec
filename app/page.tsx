import Image from "next/image";
import styles from "./page.module.css";
import {Hero} from "@/app/components/Hero/Hero";
import {About} from "@/app/components/About/About";
import {Projects} from "@/app/components/Projects/Projects";

export default function Home() {
    return (
        <>
            <Hero/>
            <About/>
            <Projects/>
        </>
    );
}
