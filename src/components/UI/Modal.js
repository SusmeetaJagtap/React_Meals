import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
export const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
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
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalEle)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEle
      )}
    </>
  );
};

export default Modal;
