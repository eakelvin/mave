import { useState, useEffect } from 'react';

export default function FetchLive(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
      fetch(url)
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        setData(data);
      })
      .catch(error => {
        setLoading(false);
        setError(error);
      });
  }, [url]);

  return { loading, error, data };
}
