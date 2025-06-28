import { FC, ReactNode } from "react";
import styles from "./buttons.module.css";
import Link from "next/link";

type DefaultLinkProps = {
  name?: string;
  children?: ReactNode;
  className?: string;
  href: string;
}

export const DefaultLinkButton: FC<DefaultLinkProps> = ({name, children, className, href}) => {
  return (
    <Link href={href} className={`${className} ${styles.defaultButton}`}>
      {name ? name : children}
    </Link>
  );
}