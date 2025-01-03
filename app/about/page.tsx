import {Summary} from "@/components/Summary/Summary";
import {Experience} from "@/components/Experience/Experience";
import {HireMe} from "@/components/HireMe/HireMe";
import {Services} from "@/components/Services/Services";
import {Preferences} from "@/components/Preferences/Preferences";

export default function Page() {
    return (
        <>
            <Summary/>
            <Services/>
            <Experience/>
            <Preferences/>
            <HireMe/>
        </>
    )
}
