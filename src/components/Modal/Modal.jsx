import { Component } from 'react';
import PropTypes from 'prop-types';
import overlay from './Modal.module.css';
import modal from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseModalEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseModalEsc);
  }

  onCloseModalEsc = e => {
    if (e.code === 'Escape') {
      console.log('Esc');
      this.props.toggleModal();
    }
  };

  render() {
    const { modalImage, toggleModal } = this.props;
    return (
      <div className={overlay.overlay} onClick={() => toggleModal()}>
        <div className={modal.modal}>
          <img src={modalImage} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modalImage: PropTypes.string,
  toggleModal: PropTypes.func,
};
