"use client";

import styles from "./index.module.css";
import Link from "next/link";
import { FaHouse } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export const Header = () => {
  const pathname = usePathname();
  const [markerStyle, setMarkerStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const updateMarkerPosition = () => {
      const activeElement = document.querySelector(`.${styles.active}`);
      if (activeElement) {
        const left = (activeElement as HTMLElement).offsetLeft;
        const width = (activeElement as HTMLElement).offsetWidth;
        setMarkerStyle({ left, width });
      }
    };

    // Update marker position initially and on window resize
    updateMarkerPosition();
    window.addEventListener("resize", updateMarkerPosition);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateMarkerPosition);
    };
  }, [pathname]);

  const handleIndicator = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    const left = e.currentTarget.offsetLeft;
    const width = e.currentTarget.offsetWidth;

    setMarkerStyle({ left, width });
  };

  return (
    <header className={`${styles.header} d-flex align-items-center`}>
      <nav className={styles.navBar}>
        <ul className={`d-flex`}>
          <div
            className={styles.marker}
            style={{ left: markerStyle.left, width: markerStyle.width }}
          ></div>

          <li>
            <Link
              className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
              href="/"
              onClick={(e) => handleIndicator(e)}
            >
              <span className={styles.text}>
                <FaHouse />
              </span>
            </Link>
          </li>

          <li>
            <Link
              className={`${styles.link} ${pathname === "/portfolio" ? styles.active : ""}`}
              href="/portfolio"
              onClick={(e) => handleIndicator(e)}
            >
              <span className={styles.text}>Portfolio</span>
            </Link>
          </li>

          <li>
            <Link
              className={`${styles.link} ${pathname === "/projects" ? styles.active : ""}`}
              href="/projects"
              onClick={(e) => handleIndicator(e)}
            >
              <span className={styles.text}>Projects</span>
            </Link>
          </li>

          <li>
            <Link
              className={`${styles.link} ${pathname === "/cv" ? styles.active : ""}`}
              href="/cv"
              onClick={(e) => handleIndicator(e)}
            >
              <span className={styles.text}>CV</span>
            </Link>
          </li>

          <li>
            <Link
              className={`${styles.link} ${pathname === "/contacts" ? styles.active : ""}`}
              href="/contacts"
              onClick={(e) => handleIndicator(e)}
            >
              <span className={styles.text}>Contacts</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
