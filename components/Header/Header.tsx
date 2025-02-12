"use client";

import styles from "./header.module.css";
import React, {FC, useEffect, useState} from "react";
import {throttle} from "@/components/utils/throttle";
import {MobileNav} from "@/components/Header/MobileNav";
import Navigation from "@/components/Header/Navigation";

export const Header: FC = () => {
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
                    classNameUl={"d-flex position-relative"}
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
