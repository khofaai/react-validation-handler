# React-Validator-Handler

This React package is for validate separated form fields using `namespace`s. 

[![npm](https://img.shields.io/npm/v/react-validation-handler.svg)](https://www.npmjs.com/package/react-validation-handler) ![license](https://img.shields.io/github/license/khofaai/react-validation-handler.svg) [![npm](https://img.shields.io/npm/dw/react-validation-handler.svg)](https://www.npmjs.com/package/react-validation-handler) [![npm](https://img.shields.io/npm/dt/react-validation-handler.svg)](https://www.npmjs.com/package/react-validation-handler) [![Build Status](https://travis-ci.org/khofaai/react-validation-handler.svg?branch=master)](https://travis-ci.org/khofaai/react-validation-handler)

## Getting Started

#### npm
```bash
npm i react-validation-handler
```
#### yarn
```bash
yarn add react-validation-handler
```

## Usage

#### basic :

```jsx
//Form1 component
import React from 'react';
import ErrorHandler from 'react-validation-handler'

...
let input1 = '';
...
  // <ErrorHandler /> accept `rules` attribute by default has an object {required: true}
  // `namespace` and `id` attributes are required so `react-validation-handler` can track that specific instance
  // `body` attribute hold content component ( in our example it's a <input />)
  <ErrorHandler
    value={input1}
    namespace="form1"
    id="form1Input1"
    body={({updateValue}) => {
      return (
        <input onChange={e => {
          input1 = e.target.value;
          // updateValue to track var changes
          updateValue(input1);
        }}/> 
      )
    }}
  />
...

//AppComponent

import Form1 from '/path/to/Form1';
import { ErrorHooks } from 'react-validation-handler'

...
  <Form1 />

  <button onClick={ _ => {
    // validate method to check if all fields under a specific `namespace` are good
    ErrorHooks.validate('form1').then( (hasErros, errors) => {
      // hasError : Boolean
      // errors: has object with all `id`s of fields that has error
    });
  }}>validate form1</button>
...

```

#### validate a target field

```jsx
...
  <Form1 />

  <button onClick={ _ => {
    // check method to check if the specified field meet rules requirements
    ErrorHooks.check('form1Input1').then( (hasError, errors) => {
      // hasError : Boolean
      // errors: has `id` of fields that has error
    });
  }}>validate form1Input1</button>
...

```

## ErrorHandler

| property | required | default | description |
|---|---|---|---|
| body      | true  | -                | component body //input, textarea, ... |
| namespace | true  | -                | to identify field group name |
| value     | true  | -                | current field value |
| id        | true  | -                | current field id |
| rules     | false | {required: true} | rules for current field (only `number`, `email` are available for now) |

#### Rules 

| rule | type | default | description | Status |
|---|---|---|---|---|
| required  | Boolean | true  | set field to required |DONE |
| email     | Boolean | false | set field as email, it should be a valid email |DONE |
| char      | Boolean | false | set field as string, it's only valid valid names {/^[A-Za-z-' ]+$/} |DONE |
| number    | Boolean | false | set field as number, it should be a valid number |DONE |
| equalTo   | String  | ''    | set field to equal another ErrorHandler Field ID " |DONE |
| pattern   | object  | {}    | object with two keys `regex` to test the entred value and `message` to be displayed in case error | DONE |
| min       | Number  | -1    | field value length should be greater or equal to min value | DONE |
| max       | Number  | -1    | field value length should be less or equal to min value | DONE |