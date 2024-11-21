import styles from './headers.module.css';

type HeaderProps = {
    title: string;
    reversed?: boolean;
    addClassName?: string;
}

export const SectionHeader = (props: HeaderProps) => {
    return (
        <h2 className={`${styles.sectionHeader} ${props.reversed ? styles.reversed : ""} ${props.addClassName}`}>
            <span className={styles.text}>{props.title}</span>
        </h2>
    )
}
