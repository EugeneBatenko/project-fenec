"use client";
import { useState } from "react";
import apiClient from "@/providers/apiClient";
import Notice from "@/ui/notify/Notify";
import styles from "./cv.module.css";
import { FaFilePdf } from "react-icons/fa6";
import { Accordion, AccordionContent, AccordionToggle } from "@/ui/accordion/Accordion";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<{ type: string; message: string } | null>(null);

  const handleDownload = async () => {
    // const userData = {
    //   timestamp: new Date().toISOString(),
    //   userAgent: navigator.userAgent,
    //   language: navigator.language,
    //   ...(await fetch("https://ipapi.co/json/")
    //     .then((res) => res.json())
    //     .catch(() => ({ ip: "Unknown", location: "Unknown" })))
    // };

    setIsLoading(true);
    try {
      const blob = await apiClient.get<Blob>("/api/cv", {}, true);
      downloadFile(blob);

      setNotification({
        type: "success",
        message: "File downloaded successfully!"
      });
    } catch (error) {
      console.error("Failed to download CV:", error);

      setNotification({
        type: "danger",
        message: "Failed to download the CV. Please try again."
      });
    } finally {
      setIsLoading(false);
    }
  };

  const downloadFile = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "CV_FullStack_developer_Yevhen_Batenko.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const resetNotification = () => {
    setNotification(null);
  };

  return (
    <>
      <section className={`${styles.heroSection} mb-5`}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 className="text-color-reverse mb-3">CV</h1>
              <button
                className={styles.button}
                onClick={handleDownload}
                disabled={isLoading}
              >
                {isLoading ? <span className="loader"></span> : <span>Download <FaFilePdf /></span>}
              </button>
            </div>
          </div>
          {notification && (
            <Notice
              type={notification.type}
              message={notification.message}
              dismissible={true}
              onDismiss={resetNotification}
            />
          )}
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">

            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <h2 className="text-center header-line my-4">FAQ</h2>
            <div className="col">
              <Accordion id={1} className={styles.accordion}>
                <h5 className="mx-4 ">What is the best way to contact you?</h5>
                <AccordionToggle id={1} className={styles.toggle} open={<FaPlus />} close={<FaMinus />} />
              </Accordion>
              <AccordionContent id={1} className={styles.content}>
                <p className="px-4 py-2 m-0">Feel free to write me an email or contact me on LinkedIn.</p>
              </AccordionContent>

              <Accordion id={2} className={styles.accordion}>
                <h5 className="mx-4 ">What is your notice period?</h5>
                <AccordionToggle id={2} className={styles.toggle} open={<FaPlus />} close={<FaMinus />} />
              </Accordion>
              <AccordionContent id={2} className={styles.content}>
                <p className="px-4 py-2 m-0">1-2 weeks. Depends on what need to finish before I go</p>
              </AccordionContent>

              <Accordion id={3} className={styles.accordion}>
                <h5 className="mx-4 ">What is your English level</h5>
                <AccordionToggle id={3} className={styles.toggle} open={<FaPlus />} close={<FaMinus />} />
              </Accordion>
              <AccordionContent id={3} className={styles.content}>
                <p className="px-4 py-2 m-0">B2. I have complete B1 level on the courses and can show
                  certificates (see in CV). But in fact I have higher level. 90% of projects was with foreign
                  client with direct communication</p>
              </AccordionContent>

              <Accordion id={4} className={styles.accordion}>
                <h5 className="mx-4 ">What is your red flags?</h5>
                <AccordionToggle id={4} className={styles.toggle} open={<FaPlus />} close={<FaMinus />} />
              </Accordion>
              <AccordionContent id={4} className={styles.content}>
                <p className="px-4 py-2 m-0">
                  - Time tracker in any form; (if you do not trust your employee there is no reason to trust you)<br />
                  - Micromanagement;<br />
                  - Technical questions on the HR screening;<br />
                  - Too much turnovers;<br />
                  - Hurry in development and overtimes as consequences;<br />
                  - Gambling and adult domain;<br />
                  - Working with russians in your company no matter if they left their country or no;<br />
                  - Demands to speak on russian language;<br />
                  - Inappropriate language;<br />
                  - Distributing out of work (only in emergencies cases);<br />
                  - Overtime without extra payment not because of my mistakes;<br />
                  - Camera off during interview with no reason;<br />
                </p>
              </AccordionContent>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}