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
    const [internalSuccess, setInternalSuccess] = useState(success);
    const [internalError, setInternalError] = useState(error);

    useEffect(() => {
        setInternalSuccess(success);
        setInternalError(error);
    }, [success, error]);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (internalSuccess || internalError) {
            timer = setTimeout(() => {
                setInternalSuccess(false);
                setInternalError(false);
            }, 3000);
        }

        return () => clearTimeout(timer);
    }, [internalSuccess, internalError]);

    const buttonContent = () => {
        if (loading) return "Loading...";
        if (internalSuccess) return "Success!";
        if (internalError) return "Error";
        return name;
    };

    return (
        <button type={type}
                className={styles.formButton}
                disabled={loading || internalSuccess}
        >
            {buttonContent()}
        </button>
    )
}
