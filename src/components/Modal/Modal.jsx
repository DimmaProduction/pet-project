import React from 'react';
import css from './Modal.module.css';
import ReactDOM from 'react-dom';

import imgSubmitBtn from '../../img/submit.svg';
import imgCloseBtn from '../../img/close.svg';

export default class Modal extends React.Component {

    componentWillMount() {
        this.root = document.createElement('div');
        document.body.appendChild(this.root);
    };

    componentWillUnmount() {
        document.body.removeChild(this.root);
    };

    render () {
        return ReactDOM.createPortal(
            <div className={css.modal}>
                <div className={css.modalForm}>
                    <div className={css.modalBody}>
                        {this.props.children}
                    </div>
                    <div className={css.modalFooter}>
                        <button disabled={this.props.disabled} className={css.btnSubmit} onClick={this.props.onSubmit}><img src={imgSubmitBtn} alt='Submit'></img></button>
                        {/* <button id='submitButton' className={css.btnSubmit} onClick={this.choiceOfButton}><img src='./img/submit.svg' alt='Submit'></img></button> */}
                        <button className={css.btnClose} onClick={this.props.onClose}><img src={imgCloseBtn} alt='close'></img></button>
                    </div>
                </div>
            </div>,
            this.root
        );
    }
}