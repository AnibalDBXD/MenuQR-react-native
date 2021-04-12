import { useState, useEffect } from 'react';
import { loadAsync } from 'expo-font';
import fonts from '../common/styles/fonts';

const useLoading = (): [boolean, Error | null] => {
  const [Loading, setLoading] = useState<boolean>(true);
  const [Error, setError] = useState<Error | null>(null);

  const StartLoading = async () => {
    try {
      await loadAsync(fonts);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    StartLoading();
  }, []);
  return [Loading, Error];
};

export default useLoading;
