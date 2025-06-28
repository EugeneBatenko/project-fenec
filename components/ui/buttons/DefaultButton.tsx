import { FC, ReactNode } from "react";
import styles from "./buttons.module.css";

type DefaultButtonProps = {
  name?: string;
  children?: ReactNode;
  className?: string;
}

export const DefaultButton: FC<DefaultButtonProps> = ({name, children, className}) => {
  return (
    <button className={`${className} ${styles.defaultButton}`} type="button">
      {name ? name : children}
    </button>
  );
}