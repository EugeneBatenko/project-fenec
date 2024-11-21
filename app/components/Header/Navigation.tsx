import React, {useEffect, useLayoutEffect, useState} from "react";
import Link from "next/link";

import {FaHouse} from "react-icons/fa6";
import {usePathname} from "next/navigation";
import {NavItem, NavProps} from "@/types";

const items: NavItem[] = [
    {itemName: "Home", pathname: "/", icon: FaHouse },
    {itemName: "About", pathname: "/about"},
    {itemName: "Projects", pathname: "/projects"},
    {itemName: "CV", pathname: "/cv"},
    {itemName: "Contacts", pathname: "/contacts"},
]

const Navigation = (props: NavProps) => {
    const pathname = usePathname();

    const [markerStyle, setMarkerStyle] = useState({left: 0, width: 0});


    useLayoutEffect(() => {
        const updateMarkerPosition = () => {
        const activeElement = document.querySelector(`.${props.classNameLinkActive}`);
            if (activeElement) {
                const left = (activeElement as HTMLElement).offsetLeft;
                const width = (activeElement as HTMLElement).offsetWidth;
                setMarkerStyle({left, width});
            }
        };

        // Update marker position initially and on window resize
        updateMarkerPosition();
        window.addEventListener("resize", updateMarkerPosition);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", updateMarkerPosition);
        };
    }, [pathname, props.classNameLinkActive]);

    const handleIndicator = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) => {
        const left = e.currentTarget.offsetLeft;
        const width = e.currentTarget.offsetWidth;

        setMarkerStyle({left, width});
    };

    return (
        <ul className={props.classNameUl}>
                <div
                    className={props.classNameMarker}
                    style={{left: markerStyle.left, width: markerStyle.width}}>
                </div>
                {
                    items.map((item: NavItem) => (
                        <li key={item.itemName}>
                            <Link
                                className={`${props.classNameLink} ${pathname === item.pathname ? props.classNameLinkActive : ""}`}
                                href={item.pathname}
                                onClick={(e) => {
                                    if(!props.isMobile) handleIndicator(e)}}
                            >
                        <span className={props.classNameText}>
                            {item.icon ? <item.icon/> : item.itemName}
                        </span>
                            </Link>
                        </li>
                    ))
                }
                </ul>
                )
            }

export default Navigation;
