import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
export const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

export const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalEle = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalEle)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEle
      )}
    </>
  );
};

export default Modal;
