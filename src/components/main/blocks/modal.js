import React, {useEffect, useState} from "react";
import { createPortal } from 'react-dom';

const Modal = (props) => {
    const el = document.createElement('div');
    const modal = document.getElementById('modal');

    useEffect(() => {
        modal.appendChild(el);
        return () => modal.removeChild(el);
    });

    return createPortal(
        props.children,
        el,
    );
}
export default Modal;
