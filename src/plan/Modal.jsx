import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <button className="modal-close" onClick={onClose}>
                        X
                    </button>
                </div>
                <div className="modal-content">{children}</div>
                <button className="modal-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
