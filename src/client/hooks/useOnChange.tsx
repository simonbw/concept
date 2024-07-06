import { useEffect, useState } from "react";

export function useOnChange<T extends Exclude<any, undefined>>(
  value: T,
  onChange: (value: T, lastValue: T | undefined) => void
): void {
  const [lastValue, setLastValue] = useState<T | undefined>(value);
  if (value !== lastValue) {
    setLastValue(value);
    onChange(value, lastValue);
  }
}
