import React, { useState, useEffect } from 'react';
import ErrorHandlerHooks from './ErrorHandlerHooks';
import './ErrorHandler.css';
import eventBus from 'simple-events-bus';

let nameHasError = {};
const errorCustomClass = 'has-error';
let ErrorText = ({error}) => error !== '' ? (ErrorHandlerHooks.getErrorLabel(error)): '';

let ErrorHandler = ({ body, namespace, value, id, rules = {required: true}}) => {

  let [errorMessage, setErrorMessage] = useState('');
  let [errorInput, setErrorInput] = useState(value);
  let BodyTag = body;

  nameHasError[namespace] = [];

  const checkValidation = cb => {
    let val = ErrorHandlerHooks.getElement(id);
    val = val === undefined ? '' : val;
    let err = ErrorHandlerHooks.setErrorMessage(rules, val);
    setErrorMessage(err);
    cb(id, err !== '');
  }

  useEffect( _ => {
    eventBus.addListeners(`${namespace}Values`, checkValidation);
    
    eventBus.addListener(`${id}Value`, checkValidation);

    return _ => eventBus.removeListener(`${id}Value`);
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