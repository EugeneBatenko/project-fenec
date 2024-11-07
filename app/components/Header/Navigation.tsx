import React, {useEffect, useState} from "react";
import Link from "next/link";

import {FaHouse} from "react-icons/fa6";
import {usePathname} from "next/navigation";
import {NavItem, NavProps} from "@/app/components/Header/types";

const items: NavItem[] = [
    {itemName: "Home", pathname: "/", icon: FaHouse },
    {itemName: "Portfolio", pathname: "/portfolio"},
    {itemName: "Projects", pathname: "/projects"},
    {itemName: "Cv", pathname: "/cv"},
    {itemName: "Contacts", pathname: "/contacts"},
]

const Navigation = (props: NavProps) => {
    const pathname = usePathname();

    const [markerStyle, setMarkerStyle] = useState({left: 0, width: 0});

    useEffect(() => {
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
            {!props.isMobile
                ? <div
                    className={props.classNameMarker}
                    style={{left: markerStyle.left, width: markerStyle.width}}>
                </div>
                : ''}

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
