import React, { useState, useEffect } from 'react';
import ErrorHandlerHooks from './ErrorHandlerHooks';
import './ErrorHandler.css';
import eventBus from '../eventBus';

let nameHasError = {};
const errorCustomClass = 'has-error';
let ErrorText = ({error}) => error !== '' ? (ErrorHandlerHooks.getErrorLabel(error)): '';

let ErrorHandler = ({ body, valueKey = '', namespace = 'none', value = '', id = '', rules = {required: true}}) => {

  let [errorUpdate, setErrorUpdate] = useState(true);
  let [errorMessage, setErrorMessage] = useState('');
  let [errorInput, setErrorInput] = useState(value);
  let updateErrorStatus = _ => setErrorUpdate(false);

  nameHasError[namespace] = [];

  let BodyTag = body;
  let bodyAttrs = {
    check: ErrorHandlerHooks.check,
    setErrorUpdate: updateErrorStatus,
    validate: ErrorHandlerHooks.validate
  };

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
      <BodyTag {...bodyAttrs} updateValue={updateValue} />
      <ErrorText error={errorMessage} />
    </div>
  );
}

export default ErrorHandler

export const ErrorHooks = ErrorHandlerHooks;