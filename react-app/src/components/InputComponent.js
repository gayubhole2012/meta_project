import React from 'react';
import { useState } from 'react';

function InputComponent(){
  const [form, setForm] = useState({
    firstName: 'Gayatri',
    lastName: 'patil',
    email: 'abc@gamil.com'
  });

  

  return(
    <>
    {/*<input value={inputText}  onChange={handleChange}/>
    <p>You typed: {inputText}</p>
    <button onClick={() => setText('Hello')}>
    Reset
  </button>*/}
      
      <label>
        First Name:
        <input
        value={form.firstName}
        onchange={ e => {
          setForm({
            ...form,
            firstName: e.target.value
          });
        }}
        />
        </label>
        <label>
        Last Name :
        <input
        value={form.lastName}
        onChnage={e => {
          setForm({
            ...form,
            lastName: e.target.value
          })
        }}
        />
        </label>
        <label>
          Email:
          <input
          value={form.email}
          onChange={e => {
            setForm({
              ...form,
              email: e.target.value
            });
          }}
          />
        </label>

        <p>
          {form.firstName}{' '}
          {form.lastName}{' '}
          ({form.email})
        </p>
        </>
  );
}
export default InputComponent;