import { useRef, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../context/Auth';

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // signUp function comes from context, not SignUp component
    const { signUp } = useAuth();
    const { error } = await signUp({ email, password });

    if (error) {
      alert('error signing up');
    } else {
      history.push('/login');
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="email" ref={emailRef} />

        <label htmlFor="input-password">Password</label>
        <input id="input-password" type="password" ref={passwordRef} />

        <br />

        <button type="submit">Sign Up</button>
      </form>
      <p>
        <br />
        <Link to="/login">Log In</Link> | <Link to="/">Back Home</Link>
      </p>
    </>
  );
}
