import { useHistory } from 'react-router';
import { useAuth } from '../context/Auth';

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const history = useHistory();

  async function handleSignOut() {
    await signOut();
    history.push('/');
  }

  return (
    <div>
      <p>Welcome!</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
