import { Component } from 'react';
import { ModalStyle } from './modal.styled';
import { Overlay } from './overlay.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hideModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hideModal);
  }

  hideModal = e => {
    if (e.code === 'Escape') {
      this.props.toggleShowModal();
    }
  };

  onClick = () => {
    this.props.toggleShowModal();
  };

  render() {
    return (
      <Overlay onClick={this.onClick}>
        <ModalStyle>
          <img src={this.props.largeImg} alt="" />
        </ModalStyle>
      </Overlay>
    );
  }
}
