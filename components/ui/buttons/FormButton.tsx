"use client";

import {FC, useEffect, useState} from "react";
import {FormButtonProps} from "@/types";
import styles from "./buttons.module.css";

export const FormButton: FC<FormButtonProps> = ({
    name,
    type = "submit",
    loading = false,
    error = false,
    success = false,
}) => {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        if (!success && !error) return;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setHidden(false);
        const timer = setTimeout(() => setHidden(true), 3000);
        return () => clearTimeout(timer);
    }, [success, error]);

    const showSuccess = success && !hidden;
    const showError = error && !hidden;

    const buttonContent = () => {
        if (loading) return "Loading...";
        if (showSuccess) return "Success!";
        if (showError) return "Error";
        return name;
    };

    return (
        <button type={type}
                className={styles.formButton}
                disabled={loading || showSuccess}
        >
            {buttonContent()}
        </button>
    )
}
