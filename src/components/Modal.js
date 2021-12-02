import React from "react";

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener("click", this.props.toggleModal);
    window.addEventListener("keydown", this.keyEscape);
  }
  componentWillUnmount() {
    window.removeEventListener("click", this.props.toggleModal);
    window.removeEventListener("keydown", this.keyEscape);
  }

  keyEscape = (e) => {
    if (e.code === "Escape") {
      this.props.toggleModal(e);
    }
  };
  render() {
    return (
      <div>
        <div className="Overlay">
          <div className="Modal">
            <img src={this.props.largeImage} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
