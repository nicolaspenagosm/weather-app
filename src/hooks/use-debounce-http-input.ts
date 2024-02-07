import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../store";

type DispatchFn = (
  params: any
) => (dispatch: Dispatch<UnknownAction>) => Promise<void>;

const useDebounceHttpInput = (
  fnToDispatch: DispatchFn,
  validateValue: (val: string) => boolean,
  delay:number
) => {
  const [value, setValue] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState<string>("");
  const [isFetching, setIsFetching] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const dispatch = useAppDispatch();

  const valueIsValid = validateValue(debouncedValue);
  const hasError = !valueIsValid && isTouched;

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value]);

  useEffect(() => {
    const sendRequest = async () => {
      try {
        if (validateValue(debouncedValue)) {
          setIsFetching(true);
          await dispatch(
            fnToDispatch({
              name: debouncedValue,
            })
          );
          setIsFetching(false);
        }
      } catch (error) {
        const err = error as Error;
      }
    };

    if (valueIsValid) sendRequest();
  }, [debouncedValue]);

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setIsTouched(false);
    setValue("");
    setDebouncedValue("");
  };

  return {
    valueChangeHandler,
    inputBlurHandler,
    isFetching,
    hasError,
    reset,
    value
  };
};

export default useDebounceHttpInput;
