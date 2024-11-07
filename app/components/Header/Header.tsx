"use client";

import styles from "./index.module.css";
import React, {useEffect, useState} from "react";
import {throttle} from "@/utils/throttle";
import {MobileNav} from "@/app/components/Header/MobileNav";
import Navigation from "@/app/components/Header/Navigation";

export const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const throttledScroll = throttle(handleScroll, 200);
        window.addEventListener('scroll', throttledScroll);

        return () => {
            window.removeEventListener('scroll', throttledScroll);
        };
    }, []);

    // Sticky scroll
    const handleScroll = () => {
        if (window.scrollY >= 300) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    return (
        <header className={`${styles.header} d-flex align-items-center ${isSticky ? styles.sticky : ''}`}>
            <nav className={`${styles.navBar} d-none d-md-flex`}>
                <Navigation
                    classNameUl={"d-flex"}
                    classNameLink={styles.link}
                    classNameLinkActive={styles.active}
                    classNameMarker={styles.marker}
                    classNameText={styles.text}
                    isMobile={false} />
            </nav>

            <MobileNav/>
        </header>
    );
};
