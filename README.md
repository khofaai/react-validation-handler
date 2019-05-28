# React-Validator-Handler

This React package is for validate separated form fields using `namespace`s. 

## Installation

- comming soon

## Usage

basic :

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
      // errors: has `id` of fields that has error
    });
  }}>validate form1</button>
...

```