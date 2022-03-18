import { useState, useEffect } from "react";

export const useFetch = <T,>(
  url: string
): {
  response: T | null;
  error: boolean;
  loading: boolean;
} => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { response, error, loading };
};
