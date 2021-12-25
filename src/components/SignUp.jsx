import React from 'react';
import { useState } from 'react';
import { createSignature } from '../services/signatures';

export default function SignUp() {
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createSignature({ first_name, last_name, email });
  };
  console.log(first_name, last_name, email);
  return (
    <div>
      <fieldset>
        <legend> Sign the Petition </legend>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first_name">First Name</label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            pattern="^[a-zA-Z]+$"
            onChange={({ target }) => setFirst_name(target.value)}
          ></input>

          <label htmlFor="last_name">Last Name</label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            pattern="^[a-zA-Z]+$"
            onChange={({ target }) => setLast_name(target.value)}
          ></input>

          <label htmlFor="email">email</label>
          <input
            id="email"
            name="email"
            type="text"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            onChange={({ target }) => setEmail(target.value)}
          ></input>
          <input type="submit" aria-label="Sign" value="Sign" />
        </form>
      </fieldset>
    </div>
  );
}
