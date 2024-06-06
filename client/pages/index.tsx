import { useCallback, useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState<string>('');

  const fetchMessage = useCallback(async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/hello`);
    const json = await response.json();

    if (response.ok) {
      setMessage(json.message);
    } else {
      setMessage('Could not fetch message');
    }
  }, []);

  useEffect(() => {
    fetchMessage();
  }, [fetchMessage]);

  return <>{message}</>;
}
