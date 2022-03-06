import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const parseQuery = (key: string, params: URLSearchParams) => {
  const query = params.get(key);
  if (query) {
    const value = JSON.parse(query);
    return value;
  }
};

export const useQueryState = <T>(key: string, fallback: T): [T, Dispatch<SetStateAction<T>>] => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState<T>(parseQuery(key, searchParams) || fallback);

  useEffect(() => {
    const value = parseQuery(key, searchParams);
    if (value) {
      setState(value);
    }
  }, [key]);

  useEffect(() => {
    const serializedState = JSON.stringify(state);
    if (serializedState !== '{}') {
      searchParams.set(key, JSON.stringify(state));
    } else {
      searchParams.delete(key);
    }
    setSearchParams(searchParams.toString());
  }, [key, state]);

  return [state, setState];
};
