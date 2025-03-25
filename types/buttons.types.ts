export type ButtonLinkProps = {
    href: string;
    name: string;
    width?: number | string;
    height?: number | string;
}

export type FormButtonProps = {
    name: string;
    loading?: boolean;
    error?: boolean;
    success?: boolean;
    type?: "button" | "submit" | "reset";
}
