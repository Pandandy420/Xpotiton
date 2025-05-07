import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const tokens = {
  'T3YGrDk48aE': Infinity,
  '1ANOi3r9utL': 365 * 24 * 60 * 60 * 1000, // 1 año
};

export default function Foto() {
  const router = useRouter();
  const { acceso } = router.query;
  const [permitido, setPermitido] = useState(false);

  useEffect(() => {
    if (acceso && tokens[acceso]) {
      setPermitido(true);
    }
  }, [acceso]);

  if (!acceso) return <p>Cargando...</p>;
  if (!permitido) return <p>Acceso denegado</p>;

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', minHeight: '100vh', fontFamily: 'sans-serif'
    }}>
      <img src="/imagen.jpeg" alt="Fotografía" style={{ maxWidth: '90%', border: '10px solid black' }} />
      <p style={{ marginTop: '1rem' }}>Xposicion Clandestina</p>
    </div>
  );
}
