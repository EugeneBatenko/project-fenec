import {SectionHeader} from "@/ui/headers/SectionHeader";
import { MdAlternateEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { FaHeartBroken } from "react-icons/fa";

import Link from "next/link";

export const GetInTouch = () => {
    return (
        <section className="mb-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <SectionHeader title={"Get In Touch"} reversed={true} addClassName={"ms-0 me-auto mb-5"}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="text-card">
                            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of
                            your vision. Whether you have a specific project in mind or just want to connect, feel free
                            to reach out. Let&apos;s collaborate and bring your ideas to life! <br/><br/>

                            You can contact me via email or connect with me on social media. I&apos;ll get back to you as
                            soon as possible. Looking forward to hearing from you!
                        </p>
                    </div>

                    <div className="col">
                        <h3 className="mb-3">Contact info</h3>
                        <p className="d-flex align-items-center"><MdAlternateEmail className="me-2" size={30} /><Link href="mailto:batenko.e.v@gmail.com">batenko.e.v@gmail.com</Link></p>
                        <p className="d-flex align-items-center"><ImLocation2 className="me-2" size={30} /> Ukraine <FaHeartBroken className="mx-1"/></p>


                    </div>
                </div>
            </div>
        </section>
    )
}