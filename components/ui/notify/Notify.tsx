import React from 'react';

/**
 * Notice component that displays a message.
 *
 * @param {Object} props
 * @param {string} props.type - The alert type: "success", "danger", "warning", "info" etc.
 * @param {string} props.message - The message content to display in the Notice.
 * @param {boolean} [props.dismissible=false] - Whether to show a dismiss button.
 */

const Notice = ({type = 'info', message, dismissible = false}: {
    type: string;
    message: string;
    dismissible?: boolean;
}) => {
    const computeAlertClass = () => {
        switch (type) {
            case 'success':
                return 'alert-success';
            case 'danger':
                return 'alert-danger';
            case 'warning':
                return 'alert-warning';
            case 'info':
            default:
                return 'alert-info';
        }
    };

    return (
        <div
            className={`alert ${computeAlertClass()} ${
                dismissible ? 'alert-dismissible fade show' : ''
            }`}
            role="alert"
        >
            {message}
            {dismissible && (
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                />
            )}
        </div>
    );
}

export default Notice;