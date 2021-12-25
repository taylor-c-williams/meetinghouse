import { useEffect, useState } from 'react';
import { getSignatures } from '../services/signatures';

export default function SignatureList() {
  const [signatures, setSignatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSignatures()
      .then((res) => setSignatures(res))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="list">
      <h1>Neighbors in Support:</h1>
      <ul>
        {signatures.map((signature) => {
          return (
            <li key={signature.id}>
              {signature.first_name} {signature.last_name}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
