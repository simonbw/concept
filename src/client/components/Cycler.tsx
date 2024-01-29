import React, { ReactNode, useEffect, useState } from "react";

export function Cycler<T>({
  children,
  items,
  duration = 1000,
}: {
  children: (item: T) => ReactNode;
  items: ReadonlyArray<T>;
  duration?: number;
}) {
  const [item, setItem] = useState<T>(items[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItem((oldItem) => {
        const index = items.indexOf(oldItem);
        return items[(index + 1) % items.length];
      });
    }, duration);
    return () => clearInterval(interval);
  }, []);
  return <>{children(item)}</>;
}
