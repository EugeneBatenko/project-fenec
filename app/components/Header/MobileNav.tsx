'use client'

import styles from './mobile.module.css';
import { usePathname } from 'next/navigation'
import {FC, useEffect} from "react";
import Navigation from "@/app/components/Header/Navigation";

import {animated, SpringValue, useSpring, useSprings} from '@react-spring/web'
import useMobileMenu from "@/store/mobileMenu";

export const MobileNav: FC = () => {
    const { isOpen, toggleMenu } = useMobileMenu();

    const delays: number[] = [310, 230, 105, 210, 305];

    const springs = useSprings(
        delays.length,
        delays.map((delay) => ({
            transform: isOpen? "scaleX(1)" : "scaleX(0)",
            delay,
            config: { duration: 1000 }
        }))
    );

    const springsMenu = useSpring({
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? "scale(1)" : "scale(0.2)",
        delay: isOpen ? 500 : 0,
        config: {
            duration: 550
        }
    })


    const springsContainer = useSpring({
        display: isOpen ? "block" : "none",
        delay: isOpen ? 0 : 1350,
    })

    const pathname = usePathname()

    useEffect(() => {
        useMobileMenu.setState({ isOpen: false })
    }, [pathname]);

    return (
        <>
            {/*Hamburger based on https://codepen.io/karlovidek/pen/aNYWKE*/}
            <nav className={`${styles.navBar} ${isOpen ? styles.open : ''} d-md-none`}>
                <h4 className="d-flex m-auto ms-3">{pathname === '/' ? 'Home' : pathname.substring(1)}</h4>
                <button className={styles.hamburger} onClick={toggleMenu}>
                    <span className={styles.menuTrigger}>
                        <i className={`${styles.triggerBar} ${styles.top}`}></i>
                        <i className={`${styles.triggerBar} ${styles.middle}`}></i>
                        <i className={`${styles.triggerBar} ${styles.bottom}`}></i>
                    </span>

                    <span className={styles.closeTrigger}>
                        <i className={`${styles.closeTriggerBar} ${styles.left}`}></i>
                        <i className={`${styles.closeTriggerBar} ${styles.right}`}></i>
                    </span>
                </button>
            </nav>

            <animated.div style={{...springsContainer}} className={`${styles.innerContainer} d-md-none`}>
                <div className={styles.bgContainer}>

                    {springs.map((springStyles, index) => (
                        <animated.div
                            key={index}
                            style={springStyles as object as {
                                width: SpringValue<string>;
                            }}
                            className={styles.menuBg}
                        ></animated.div>
                    ))}
                </div>


                <animated.div style={{...springsMenu}} className={styles.menuContainer}>
                    <Navigation
                        classNameUl={styles.menuList}
                        classNameLink={styles.menuItemLink}
                        classNameLinkActive={styles.active}
                        classNameMarker={styles.menuItemMarker}
                        classNameText={styles.menuItemText}
                        isMobile={true}
                        />
                </animated.div>
            </animated.div>
        </>
    )
}
