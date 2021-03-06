import React, {useContext} from 'react';
import {weather} from '../context';

const Modal = (props) => {
  const value = useContext(weather);

  if (!value.modalOpen && value.error === "") {
    return null;

  } else {
    return (<div className="modalContainer">
      <div className="row mainModalRow">
        <div className="col-10 col-md-8 mx-auto p-4 text-center text-capitalize" id="modal">
          <div className="row">
            <div className="col-10">
              <input type="text" className="form-control" id="cityInput" autoFocus placeholder="Search City" />
            </div>
            <div className="col-auto searchIconCol" onClick={() => value.closeModal()}>
              <span><i className="fas fa-search"></i></span>
            </div>
          </div>
          <div className={value.error === "" ? "row errorRow" : "row errorRow show"}>
            <p>{value.error}</p>
          </div>
          <div className="instructionContainer">
            <div className="row instructionRow">
              <p>
                If you do not get desired result, add country code after using comma.
                <br />
                <b>Example: </b>Delhi,IN; New York,US
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  }
}

export default Modal;
