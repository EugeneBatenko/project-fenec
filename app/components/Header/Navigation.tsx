import {FC, useLayoutEffect, useState} from "react";
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

const Navigation: FC<NavProps> = (NavProps) => {
    const pathname = usePathname();

    const [markerStyle, setMarkerStyle] = useState({left: 0, width: 0});


    useLayoutEffect(() => {
        const updateMarkerPosition = () => {
        const activeElement = document.querySelector(`.${NavProps.classNameLinkActive}`);
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
    }, [pathname, NavProps.classNameLinkActive]);

    const handleIndicator = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) => {
        const left = e.currentTarget.offsetLeft;
        const width = e.currentTarget.offsetWidth;

        setMarkerStyle({left, width});
    };

    return (
        <ul className={NavProps.classNameUl}>
                <div
                    className={NavProps.classNameMarker}
                    style={{left: markerStyle.left, width: markerStyle.width}}>
                </div>
                {
                    items.map((item: NavItem) => (
                        <li key={item.itemName}>
                            <Link
                                className={`${NavProps.classNameLink} ${pathname === item.pathname ? NavProps.classNameLinkActive : ""}`}
                                href={item.pathname}
                                onClick={(e) => {
                                    if(!NavProps.isMobile) handleIndicator(e)}}
                            >
                        <span className={NavProps.classNameText}>
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
