import {FC} from "react";

export type IconItem = {
    component: FC<{ size: number }>;
    size: number;
    className: 'mainSkill' | 'childSkill';
};
