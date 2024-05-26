import { ChangeEvent, useState } from 'react';
import { Input } from '../ui/input';
import useDebounce from '@/customHooks/useDebounce';

interface InputSearchType {
  value: string;
  onChange: (...args: Array<string>) => void;
}

export function InputWithDebounce({ value, onChange }: InputSearchType) {
  const [displayValue, setDisplayValue] = useState(value);
  const debounceChange = useDebounce(onChange, 1500);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setDisplayValue(event.target.value);
    debounceChange(event.target.value);
  }
  return (
    <div className="max-w-96 m-auto border-2 border-slate-700 rounded-lg">
      <Input type="search" value={displayValue} onChange={handleChange} />
    </div>
  );
}
