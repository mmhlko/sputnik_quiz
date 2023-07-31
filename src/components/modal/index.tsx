import s from './styles.module.scss';
import classNames from 'classnames';
import { createPortal } from 'react-dom'
import { useRef, ReactNode } from 'react'
//onClick={() => e.stopPropagation()} запрещает обработку события при погружении(погружение, захват, всплытие)
//onMouseDown={onClose} для закрытия модального окна только когда нажимаешь во внешнюю область, а не кликаешь (нажал+отжал)

type IModalProps = {
    children: ReactNode,
    isOpen: boolean,
    onClose: () => void
}

const Modal = ({children, isOpen, onClose}: IModalProps) => {

    const refModal = useRef<HTMLDivElement>(null);
    
    const renderContent = () => {
        return ( 
            <div ref={refModal} className={classNames(s.modal, {[s.modal_active]: isOpen})} onMouseDown={onClose}>
                <div className={classNames(s.modal__content, {[s.modal__content_active]: isOpen})} onMouseDown={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div> 
        );        
    }
    
    return createPortal(renderContent(), document.getElementById('modal-root') as HTMLDivElement)
}

export default Modal;

