import { useCallback, useState } from "react";
import { FetchCityNameProps } from "../services/city-api";
import { Position } from "../services/geolocation-api";

export interface ApiParams {
  params?: Position | FetchCityNameProps;
}

export type State = {
  loading: boolean;
  error: null | string;
};
const useHttp = (initialState: State) => {
  const [isLoading, setIsLoading] = useState(initialState.loading);
  const [error, setError] = useState<null | string>(initialState.error);

  const sendRequest = useCallback(async (request: () => Promise<void>) => {
    try {
      setIsLoading(true);
      setError(null);
      await request();
      setIsLoading(false);
    } catch (err) {
      setError("Something went wrong!");
    }
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
