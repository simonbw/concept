import React, {
  HTMLProps,
  PropsWithChildren,
  ReactNode,
  useContext,
  useEffect,
  useId,
  useReducer,
  useRef,
  useState,
} from "react";
import { clamp } from "../../common/utils/mathUtils";
import { beep } from "../../common/utils/beep";
import { useKeyDown } from "../hooks/useKeyDown";
import { TypedText } from "./effects/TypedText";
import { classNames } from "../utils/classNames";
import { SequenceChecker } from "./effects/SequenceChecker";

const MenuContext = React.createContext<{
  useMenuItem: (onSelected: () => void) => { selected: boolean };
}>({
  useMenuItem: () => ({ selected: false }),
});

export const Menu: React.FC<
  PropsWithChildren<{
    disabled?: boolean;
    shouldBeep?: boolean;
  }>
> = ({ children, disabled, shouldBeep = true }) => {
  const [ready, setReady] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const itemsRef = useRef<{ id: string; onSelect: () => void }[]>([]);
  const rerender = useReducer((x) => x + 1, 0)[1];

  useKeyDown((event: KeyboardEvent) => {
    if (!ready || disabled) return;
    switch (event.code) {
      case "ArrowUp":
        setSelectedIndex((index) =>
          clamp(index - 1, 0, itemsRef.current.length - 1),
        );
        shouldBeep && beep({ volume: 1, duration: 30 });
        break;
      case "ArrowDown":
        setSelectedIndex((index) =>
          clamp(index + 1, 0, itemsRef.current.length - 1),
        );
        shouldBeep && beep({ volume: 1, duration: 30 });
        break;
      case "Enter":
      case "Space":
        itemsRef.current?.[selectedIndex]?.onSelect();
        break;
    }
  });

  function useMenuItem(onSelect: () => void) {
    const id = useId();
    useEffect(() => {
      itemsRef.current = [...itemsRef.current, { id, onSelect }];
      rerender();

      // Cleanup
      return () => {
        itemsRef.current = itemsRef.current.filter((item) => item.id !== id);
        rerender();
      };
    }, [id]);

    const selected =
      ready &&
      !disabled &&
      selectedIndex == itemsRef.current.findIndex((item) => item.id === id);
    return { selected };
  }

  return (
    <MenuContext.Provider value={{ useMenuItem }}>
      <ol className="leading-relaxed">
        {children}
        <SequenceChecker setDone={setReady} />
      </ol>
    </MenuContext.Provider>
  );
};

export const MenuItem: React.FC<
  HTMLProps<HTMLLIElement> & {
    children: string | string[];
    indicator?: ReactNode;
    onSelect: () => void;
    enabled?: boolean;
  }
> = ({ children, onSelect, enabled = true, indicator, className, ...rest }) => {
  const { selected } = useContext(MenuContext).useMenuItem(onSelect);
  return (
    <li className={classNames("whitespace-pre-wrap", className)} {...rest}>
      <span className={selected ? "" : "text-transparent"}>
        <TypedText>{"> "}</TypedText>
      </span>
      <TypedText>{children}</TypedText>
      <span className={selected ? "" : "invisible"}>{indicator}</span>
    </li>
  );
};
