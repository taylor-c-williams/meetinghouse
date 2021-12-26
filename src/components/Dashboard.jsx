import React from 'react';

export default function Dashboard() {
  async function handleSignOut() {
    // sign out logic
  }

  return (
    <div>
      <p>Welcome!</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
