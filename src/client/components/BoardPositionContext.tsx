import React, { PropsWithChildren, createContext, useRef } from "react";

const context = createContext<HTMLElement | null>(null);

export const BoardPositionProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const ref = useRef(null);
  return (
    <context.Provider value={ref.current}>
      <div className="relative" ref={ref}>
        {children}
      </div>
    </context.Provider>
  );
};

export function useBoardRef() {
  return React.useContext(context);
}
