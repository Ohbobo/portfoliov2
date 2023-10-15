import React from 'react';
import './Modal.css';

type Props = {
  handleClose: () => void;
  show: boolean;
  children: React.ReactNode;
};

export const Modal = ({ handleClose, show, children }: Props) => {
  const showHideClassName = show ? 'modal modal--show' : 'modal modal--hide';

  return (
    <div className={showHideClassName}>
      <div className="modal__overlay"></div>
      <div className="modal__container">
        <div className="modal__content">
          {children}
        </div>
        <div className="modal__footer">
          <button className="modal__close-btn" onClick={handleClose}>Fermer</button>
        </div>
      </div>
    </div>
  );
};
