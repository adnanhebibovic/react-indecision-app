import React from 'react'
import ReactModal from 'react-modal'

const Modal = function(props) {
    return (
        <ReactModal
            isOpen={!!props.option}
            contentLabel='Selected option'
            onRequestClose={props.handleClose}
            closeTimeoutMS={200}
            className="modal"
            ariaHideApp={false}
        >
            <h3 className="modal__title">Selected option</h3>
            {props.option && <p className="modal__title">{props.option}</p>}
            <button className="button" onClick={props.handleClose}>Okay</button>
        </ReactModal>
    )
}

export default Modal