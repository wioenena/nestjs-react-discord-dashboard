import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { fetch } from '../lib/axios';

export const useFetch = (url: string, options?: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse<any, any> | null>(
    null
  );
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url, options);
        setResponse(res);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);

  return { response, error, isLoading };
};
