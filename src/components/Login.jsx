import { useRef, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../context/Auth';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signIn } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const { error } = await signIn({ email, password });

    if (error) {
      alert('error signing in');
    } else {
      history.push('/dashboard');
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

        <button type="submit">Login</button>
      </form>

      <p>
        <br />
        <Link to="/signup">Sign Up</Link> | <Link to="/">Back Home</Link>
      </p>
    </>
  );
}
