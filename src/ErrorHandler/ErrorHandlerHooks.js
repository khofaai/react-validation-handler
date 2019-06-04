import React from 'react';
import eventBus from 'simple-events-bus';

let errorsKeys = {};
let elements = {};

let messages = {
  required: {
    en: 'this field is required',
    fr: `Ce champ est requis`
  },
  equalTo: {
    fr: 'Ce champs doit être similaire à : ',
    en: 'this field should be like : ',
  },
  type: {
    number: {
      en: 'this field accept numbers only',
      fr: 'Ce champ accept que les numero'
    },
    email: {
      en: 'this field should be a valid email',
      fr: 'ce champ dois etre un valide email'
    }
  }
};

const emitValidation = eventName => {
  eventBus.emit(eventName, (id, status) => {
    status ? errorsKeys[id] = true : delete errorsKeys[id];
  });
  return {
    then: errorHanlderHooks.checkDispatch
  }
}

let errorHanlderHooks = {

  getMessages() {
    return messages;
  },

  isEmail(val) {
    let regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regx.test(val);
  },

  isEqualto(val, ref) {
    return val === elements[ref];
  },

  isNumber(val) {
    let regx = /^[0-9]+$/
    return regx.test(val);
  },

  setElement(id, value) {
    elements[id] = value;
  },

  getElement(id) {
    return elements[id];
  },

  clearErrorMessage(value, setErrorInput) {
    if(value.trim() !== '') {
      setErrorInput('')
    }
  },

  check(id) {
    return emitValidation(`${id}Value`);
  },

  validate(name) {
    return emitValidation(`${name}Values`);
  },

  checkDispatch(callback) {
    callback(Object.keys(errorsKeys).length > 0, errorsKeys);
    return errorsKeys;
  },

  getErrorLabel(message) {
    return (<label className="InputWrapper_explain">{message}</label>)
  },

  setErrorMessage(rules, value, lang = 'en') {
    if(rules.required && (typeof value === 'string' && value.trim()) === '') {
      return messages.required[lang];
    } 
    if(rules.email && !errorHanlderHooks.isEmail(value)) {
      return messages.type.email[lang];
    }
    if(rules.number && !errorHanlderHooks.isNumber(value)) {
      return messages.type.number[lang];
    }
    if(rules.equalTo && !errorHanlderHooks.isEqualto(value, rules.equalTo)) {
      let label = rules.equalToLabel ? rules.equalToLabel : rules.equalTo;
      return `${messages.equalTo[lang]} ${label}`;
    }
    return '';
  }
}

export default errorHanlderHooks;