import React from 'react';
import eventBus from 'simple-events-bus';

let errorsKeys = {};
let elements = {};

let messages = {
  required: {
    en: 'this field is required',
    fr: `Ce champ est requis`
  },
  char: {
    en: 'This field is incorrect',
    fr: 'Ce champs est incorrect'
  },
  equalTo: {
    fr: 'Ce champs doit être similaire à : ',
    en: 'this field should be like : ',
  },
  min: {
    fr: (min) => `Le mot de passe doit contenir au moins ${min} caractères`,
    en: (min) => `Le mot de passe doit contenir au moins ${min} caractères`,
  },
  max: {
    fr: (max) => `Le mot de passe doit contenir plus que ${max} caractères`,
    en: (max) => `Le mot de passe doit contenir plus que ${max} caractères`,
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

  hasMin(val, min = 5) {
    return val.length >= min;
  },

  hasMax(val, max = 5) {
    return val.length <= max;
  },

  pattern(val, pattern = /^.*/) {
    return pattern.test(val);
  },

  isEmail(val) {
    let regx = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return errorHanlderHooks.pattern(val, regx);
  },

  isChar(val) {
    let regx = /^[A-Za-z-' ]+$/;
    return errorHanlderHooks.pattern(val, regx);
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

  getElements() {
    return elements;
  },

  removeElement(id) {
    delete elements[id];
  },

  clearElements() {
    elements = {}
  },

  getErrors() {
    return errorsKeys;
  },

  removeError(id) {
    delete errorsKeys[id];
    eventBus.removeListenersOf(id);
  },

  clearErrors() {
    errorsKeys = {}
  },

  clearErrorMessage(value, setErrorInput) {
    if(value.trim() !== '') setErrorInput('')
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

  setErrorMessage(rules, value, lang = 'fr') {
    if(typeof value === 'object') {
      value = value.target !== null ? value.target.value : ''
    }
    if(rules.required && value.trim() === '') {
      return messages.required[lang];
    }
    if(rules.email && !errorHanlderHooks.isEmail(value)) {
      return messages.type.email[lang];
    }
    if(rules.min && !errorHanlderHooks.hasMin(value, rules.min)) {
      return messages.min[lang](rules.min);
    }
    if(rules.max && !errorHanlderHooks.hasMax(value, rules.max)) {
      return messages.max[lang](rules.max);
    }
    if(rules.char && !errorHanlderHooks.isChar(value)) {
      return messages.char[lang];
    }
    if(typeof rules.pattern === 'object' && rules.pattern.regex && !errorHanlderHooks.pattern(value, rules.pattern.regex)) {
      return rules.pattern.message || 'ce champs est invalide';
    }
    if(rules.equalTo && !errorHanlderHooks.isEqualto(value, rules.equalTo)) {
      let label = rules.equalToLabel ? rules.equalToLabel : rules.equalTo;
      return `${messages.equalTo[lang]} ${label}`;
    }
    return '';
  },
}

export default errorHanlderHooks;