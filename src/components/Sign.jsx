import { useState } from 'react';
import { createSignature } from '../services/signatures';

export default function SignUp() {
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [email_updates, setEmail_updates] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createSignature({ first_name, last_name, email, email_updates });
  };
  // console.log(first_name, last_name, email, email_updates);
  return (
    <div>
      <fieldset>
        <legend> Sign the Petition </legend>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first_name">First Name:</label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            pattern="^[a-zA-Z_ ]*$"
            placeholder="letters A-Z only, please"
            required
            onChange={({ target }) => setFirst_name(target.value)}
          ></input>
          <label htmlFor="last_name">Last Name:</label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            pattern="^[a-zA-Z]+$"
            placeholder="letters A-Z only, please"
            required
            onChange={({ target }) => setLast_name(target.value)}
          ></input>
          <label htmlFor="email">E-mail Address:</label>
          <input
            id="email"
            name="email"
            type="text"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            placeholder="123@abc.com"
            required
            onChange={({ target }) => setEmail(target.value)}
          ></input>

          <span>
            <input
              type="checkbox"
              checked={email_updates}
              id="subscribe"
              name="subscribe"
              value="true"
              onChange={() => setEmail_updates(!email_updates)}
            />
            I would like to receive e-mail updates
          </span>
          <button type="submit" aria-label="Sign">
            {' '}
            Submit{' '}
          </button>
        </form>
      </fieldset>
    </div>
  );
}
