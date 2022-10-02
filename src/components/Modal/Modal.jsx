import PropTypes from 'prop-types';
import overlay from './Modal.module.css';
import modal from './Modal.module.css';
import { useEffect } from 'react';

export function Modal({ toggleModal, modalImage }) {
  useEffect(() => {
    const onCloseModalEsc = e => {
      if (e.code === 'Escape') {
        console.log('Esc');
        toggleModal();
      }
    };

    window.addEventListener('keydown', onCloseModalEsc);

    return () => {
      window.removeEventListener('keydown', onCloseModalEsc);
    };
  }, [toggleModal]);

  return (
    <div className={overlay.overlay} onClick={() => toggleModal()}>
      <div className={modal.modal}>
        <img src={modalImage} alt="" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  modalImage: PropTypes.string,
  toggleModal: PropTypes.func,
};
