import React, { useEffect } from 'react';
import styles from './alert.module.css'

const Toast = ({ message, type, onClose, position }) => {
    const className = type === 'success' ? styles.successmessage : styles.errormessage;

    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={className} style={{ position: 'fixed', ...position }}>
            {message}
        </div>
    );
}

export default Toast;

