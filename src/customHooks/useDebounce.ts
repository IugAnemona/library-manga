import { useRef } from 'react';

type CallbackFunction = (...args: Array<string>) => void;

export default function useDebounce(callback: CallbackFunction, delay: number) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function debouncedFN(...args: Array<string>) {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }

  return debouncedFN;
}
