import {FC} from "react";

import {
    DiCode, DiHtml5, DiCss3, DiJavascript1, DiReact, DiSass, DiNpm,
    DiDatabase, DiMongodb, DiRedis, DiGit, DiGithubBadge, DiLinux, DiTerminal, DiRuby,
} from "react-icons/di";
import {BiLogoPostgresql} from "react-icons/bi";
import {FaAws, FaGears, FaNodeJs, FaPython, FaDocker, FaGolang, FaRaspberryPi, FaFigma} from "react-icons/fa6";
import {
    SiTypescript, SiRedux, SiNextdotjs, SiNestjs, SiExpress, SiPug, SiAwslambda, SiVercel, SiGraphql, SiCplusplus,
    SiRubyonrails, SiGimp, SiPostman
} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {IoInfiniteSharp} from "react-icons/io5";
import styles from "./index.module.css";


type IconItem = {
    component: FC<{ size: number }>;
    size: number;
    className: 'mainSkill' | 'childSkill';
};

const frontendIcons: IconItem[] = [
    {component: DiCode, size: 40, className: 'mainSkill'},
    {component: DiHtml5, size: 20, className: 'childSkill'},
    {component: DiCss3, size: 20, className: 'childSkill'},
    {component: DiJavascript1, size: 20, className: 'childSkill'},
    {component: SiTypescript, size: 20, className: 'childSkill'},
    {component: SiPug, size: 20, className: 'childSkill'},
    {component: DiReact, size: 20, className: 'childSkill'},
    {component: SiRedux, size: 20, className: 'childSkill'},
    {component: SiNextdotjs, size: 20, className: 'childSkill'},
    {component: DiSass, size: 20, className: 'childSkill'},
    {component: DiNpm, size: 20, className: 'childSkill'}
];

const backendIcons: IconItem[] = [
    {component: DiDatabase, size: 40, className: 'mainSkill'},
    {component: FaNodeJs, size: 20, className: 'childSkill'},
    {component: SiExpress, size: 20, className: 'childSkill'},
    {component: SiNestjs, size: 20, className: 'childSkill'},
    {component: SiGraphql, size: 20, className: 'childSkill'},
    {component: BiLogoPostgresql, size: 20, className: 'childSkill'},
    {component: GrMysql, size: 20, className: 'childSkill'},
    {component: DiMongodb, size: 20, className: 'childSkill'},
    {component: FaDocker, size: 20, className: 'childSkill'},
    {component: DiRedis, size: 20, className: 'childSkill'},
    {component: FaAws, size: 20, className: 'childSkill'},
    {component: SiAwslambda, size: 20, className: 'childSkill'}
];

const devOpsIcons: IconItem[] = [
    {component: IoInfiniteSharp, size: 40, className: 'mainSkill'},
    {component: DiGithubBadge, size: 25, className: 'childSkill'},
    {component: DiGit, size: 25, className: 'childSkill'},
    {component: DiLinux, size: 20, className: 'childSkill'},
    {component: DiTerminal, size: 20, className: 'childSkill'},
    {component: FaAws, size: 20, className: 'childSkill'},
    {component: SiVercel, size: 20, className: 'childSkill'},
];

const otherIcons: IconItem[] = [
    {component: FaGears, size: 40, className: 'mainSkill'},
    {component: SiCplusplus, size: 20, className: 'childSkill'},
    {component: FaPython, size: 20, className: 'childSkill'},
    {component: DiRuby, size: 20, className: 'childSkill'},
    {component: SiRubyonrails, size: 25, className: 'childSkill'},
    {component: FaGolang, size: 25, className: 'childSkill'},
    {component: FaRaspberryPi, size: 20, className: 'childSkill'},
    {component: SiGimp, size: 20, className: 'childSkill'},
    {component: FaFigma, size: 20, className: 'childSkill'},
    {component: SiPostman, size: 20, className: 'childSkill'},
];


interface SkillsPipeProps {
    skillSet: 'frontend' | 'backend' | 'devops' | 'other';
}

const SkillsPipe: FC<SkillsPipeProps> = ({skillSet}) => {
    const icons = (() => {
        switch (skillSet) {
            case 'frontend':
                return frontendIcons;
            case 'backend':
                return backendIcons;
            case 'devops':
                return devOpsIcons;
            case 'other':
                return otherIcons;
            default:
                return [];
        }
    })();

    return (
        <div className={styles.skillsPipe}>
            {icons.map((icon, index) => {
                const IconComponent = icon.component;
                return (
                    <span key={index} className={styles[icon.className]}>
                        <IconComponent size={icon.size}/>
                    </span>
                );
            })}
        </div>
    );
};

export default SkillsPipe;