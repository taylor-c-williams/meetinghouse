import React from 'react';
import { getSignatures } from '../services/signatures';
const SignatureContext = React.createContext();

export default function SignatureProvider({ children }) {
  const [signatures, setSignatures] = useState();

  useEffect(() => {
    getSignatures()
      .then((res) => setSignatures(res))
      .finally(() => setLoading(false));
  }, []);
  return <div></div>;
}
