import {Summary} from "@/app/components/Summary/Summary";
import {Experience} from "@/app/components/Experience/Experience";
import {HireMe} from "@/app/components/HireMe/HireMe";
import {Services} from "@/app/components/Services/Services";

export default function Page() {
    return (
        <>
            <Summary/>
            <Services/>
            <Experience/>
            <HireMe/>
        </>
    )
}
