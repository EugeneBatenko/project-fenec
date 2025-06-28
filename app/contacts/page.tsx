import {MdOutlineAlternateEmail} from "react-icons/md";
import {FaInfoCircle, FaLinkedinIn} from "react-icons/fa";
import {RiTimeZoneFill} from "react-icons/ri";

import Link from "next/link";

export default function Page() {
    const uaTimeFormatter = new Intl.DateTimeFormat('uk-UA', {
        hour: 'numeric',
        minute: 'numeric',
        // second: 'numeric',
        // hour12: false,
        timeZone: 'Europe/Kyiv'
    });

// For user's system time format
  const userTimeFormatter = new Intl.DateTimeFormat(navigator?.language || undefined, {
    hour: "numeric",
    minute: "numeric",
    // hour12: true
  });

    const now = new Date();

    return (
        <section className="container my-5">
            <div className="row mt-5 mb-3">
                <div className="col">
                    <div className="bg-section text-center">
                        <h1 className="header-line text-center py-5">Contact</h1>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 col-12 mb-3">
                    <div className="text-card text-center d-flex flex-column align-items-center h-100">
                        <MdOutlineAlternateEmail className="svg-color mb-3" size={50}/>
                        <Link className="link" href="mailto:batenko.e.v@gmail.com">batenko.e.v@gmail.com</Link>
                    </div>
                </div>
                <div className="col-lg-6 col-12 mb-3">
                    <div className="text-card text-center d-flex flex-column align-items-center h-100">
                        <FaInfoCircle className="svg-color mb-3" size={50}/>
                        <p>I am usually available in these hours <br/> 10:00-19:00 (10am - 7pm) in my timezone</p>
                        <p>If I am not answered please write me again</p>
                    </div>
                </div>
                <div className="col-lg-6 col-12 mb-3">
                    <div className="text-card text-center d-flex flex-column align-items-center h-100">
                        <FaLinkedinIn className="svg-color mb-3" size={50}/>
                        <Link className="link" href="https://www.linkedin.com/in/eugene-batenko-west-lion/"
                              target="_blank">Linkedin</Link>
                    </div>
                </div>
                <div className="col-lg-6 col-12 mb-3">
                    <div className="text-card text-center d-flex flex-column align-items-center h-100">
                        <RiTimeZoneFill className="svg-color mb-3" size={50}/>
                        <p>My time (Kyiv): {uaTimeFormatter.format(now)}</p>
                        <p>Your local time: {userTimeFormatter.format(now)}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
