import React, { useState, useEffect } from 'react';
import ErrorHandlerHooks from './ErrorHandlerHooks';
import './ErrorHandler.css';
import eventBus from 'simple-events-bus';

let nameHasError = {};
const errorCustomClass = 'has-error';
let ErrorText = ({error}) => error !== '' ? (ErrorHandlerHooks.getErrorLabel(error)): '';

let ErrorHandler = ({ body, namespace = 'none', value = '', id = '', rules = {required: true}}) => {

  let [errorMessage, setErrorMessage] = useState('');
  let [errorInput, setErrorInput] = useState(value);
  let BodyTag = body;

  nameHasError[namespace] = [];

  useEffect( _ => {
    eventBus.addListeners(`${namespace}Values`, cb => {
      let val = ErrorHandlerHooks.getElement(id);
      val = val === undefined ? '' : val;
      let err = ErrorHandlerHooks.setErrorMessage(rules, val);
      setErrorMessage(err);
      cb(id, err !== '');
    });

    return _ => eventBus.removeListener(`${namespace}Values`);
  }, []);

  let updateValue = val => {
    ErrorHandlerHooks.setElement(id, val);
    if(val !== '' && (typeof val === 'string' && val.trim() !== '')) setErrorMessage('')
    else setErrorMessage(ErrorHandlerHooks.setErrorMessage(rules, val));
    setErrorInput(val);
    return errorInput;
  }
  
  return (
    <div className={`InputWrapper${errorMessage !== '' ? ' '+errorCustomClass : ''}`}>
      <BodyTag updateValue={updateValue} />
      <ErrorText error={errorMessage} />
    </div>
  );
}

export default ErrorHandler

export const ErrorHooks = ErrorHandlerHooks;