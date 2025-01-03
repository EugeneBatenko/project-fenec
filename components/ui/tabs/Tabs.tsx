"use client"

import {FC, useState, Children, isValidElement} from "react";
import {TabProps, TabsProps} from "@/types";

export const Tab: FC<TabProps> = ({children}) => {
    return <>{children}</>
}

type TabChildProps = {
    classNameTab: string;
    label: string;
};

export const Tabs: FC<TabsProps> = ({children, classNames}) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTabIndex(index)
    }

    const { tabs = "", panel = "", content = "" } = classNames || {};

    return (
        <>
            <div className={tabs}>
                <div className={panel}>
                    {Children.map(children, (child, index) => {
                        if (!isValidElement<TabChildProps>(child)) return null;
                        return (
                            <button
                                className={`${child.props.classNameTab} ${activeTabIndex === index ? 'active' : ''}`}
                                onClick={() => handleTabClick(index)}
                            >
                                {child.props.label}
                            </button>
                        );
                    })}
                </div>

                <div className={content}>
                    {Children.map(children, (child, index) => {
                        if (index === activeTabIndex) return child;
                    })}
                </div>
            </div>
        </>
    )
}
