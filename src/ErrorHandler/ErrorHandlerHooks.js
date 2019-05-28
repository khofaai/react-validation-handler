import React from 'react';
import eventBus from 'simple-events-bus';

let keys = [];
let errorsKeys = {};
let elements = {};

let messages = {
  required: {
    en: 'this field is required',
    fr: `Ce champ est requis`
  },
  type: {
    number: {
      en: 'this field accept numbers only',
      fr: 'Ce champ accept que les numero'
    },
    string: {
      en: 'this field accept caracteres only',
      fr: 'Ce champ accept que les caracteres'
    },
    email: {
      en: 'this field should be a valid email',
      fr: 'ce champ dois etre un valide email'
    },
    number: {
      en: 'this field accept only numbers',
      fr: 'ce champ accepte que les numeros'
    }
  }
};

let errorHanlderHooks = {

  getMessages() {
    return messages;
  },

  isEmail(val) {
    let regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regx.test(val);
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

  clearErrorMessage(value, setErrorInput) {
    if(value.trim() !== '') {
      setErrorInput('')
    }
  },

  validate(name) {
    eventBus.emit(`${name}Values` , (id, status) => {
      status ? errorsKeys[id] = true : delete errorsKeys[id];
    });
    return {
      then: errorHanlderHooks.checkDispatch
    }
  },

  checkDispatch(callback) {
    callback(Object.keys(errorsKeys).length > 0, errorsKeys);
    return errorsKeys;
  },

  check(key, callback = {}) {
    eventBus.emit(key, callback);
  },

  validation(key, callback) {
    keys.push(key);
    eventBus.addListener(key, callback)
  },

  getErrorLabel(message) {
    return (<label className="InputWrapper_explain">{message}</label>)
  },

  checkInput(input, rules, lang = 'en') {
    input.error = rules.required && input.value === '' ? messages.required[lang] : '';
  },

  setErrorMessage(rules, value, lang = 'en') {
    if(rules.required && (typeof value === 'string' && value.trim()) === '') {
      return messages.required[lang];
    } else if(rules.email && !errorHanlderHooks.isEmail(value)) {
      return messages.type.email[lang];
    } else if(rules.number && !errorHanlderHooks.isNumber(value)) {
      return messages.type.number[lang];
    }
    return '';
  },

  validateData(data, containerName = 'none',lang = 'en') {
    let dataKeys = Object.keys(data);
    dataKeys.map( key => {
      let input = data[key];
      if(input.required) {
        input.error = input.value.trim() === '' ? messages.required[lang] : '';
      }
      return input
    });

    if(containerName !== 'none') eventBus.emit(containerName, data);
    return data;
  }
}

export default errorHanlderHooks;