"use client"

import styles from "./notify.module.css";
import {HiMiniXMark} from "react-icons/hi2";
import {FC, useEffect, useState} from "react";
import {NoticeProps} from "@/types";
import {NOTICE_DURATION} from "@/const";

/**
 * Notice the component to display alert messages.
 *
 * @param [type="info"] - The type of the notice (success, danger, warning, info).
 * @param message - The message to display in the notice.
 * @param [dismissible=false] - Whether the user can dismiss the notice.
 *
 * @param onDismiss
 * @returns {JSX.Element | null} The rendered notice component or null if not visible.
 */

const Notice: FC<NoticeProps> = ({
  type = "info",
  message,
  dismissible = false,
  onDismiss,
}): JSX.Element | null => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onDismiss) onDismiss(); // Notify parent when dismissed
    }, NOTICE_DURATION);

    return () => clearTimeout(timer);
  }, [onDismiss]);

  const handleClose = () => {
    setVisible(false);
    if (onDismiss) onDismiss(); // Notify parent when manually closed
  };

  const computeAlertClass = () => {
    switch (type) {
      case "success":
        return "success";
      case "danger":
        return "danger";
      case "warning":
        return "warning";
      default:
        return "info";
    }
  };

  if (!visible) return null;

  return (
    <div
      className={`${styles.alert} ${computeAlertClass()} ${
        dismissible ? "alert-dismissible fade show" : ""
      }`}
      role="alert"
    >
      {message}
      {dismissible && (
        <button
          type="button"
          className={styles.closeButton}
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={handleClose}
        >
          <HiMiniXMark size={25} />
          <div className={styles.timerContainer}>
            <svg
              className={styles.circularSvg}
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={styles.circleBg}
                d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={styles.circleAnimation}
                style={{
                  animationDuration: `${NOTICE_DURATION}ms`,
                }}
                d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
};

export default Notice;

