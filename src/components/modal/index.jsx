import React from 'react';
import s from './styles.module.scss';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import { useRef } from 'react';



function Modal({children, isOpen, onClose}) {
    const refModal = useRef(null);
    
    const renderContent = () => {
        return ( 
            <div ref={refModal} className={classNames(s.modal, {[s.modal_active]: isOpen})} onMouseDown={onClose}>
                <div className={classNames(s.modal__content, {[s.modal__content_active]: isOpen})} onMouseDown={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div> 
        );

        
    }

    return createPortal(renderContent(), document.getElementById('modal-root'))
}

export default Modal;

