import React, {
  createContext,
  useContext,
  useEffect,
  useId,
  useReducer,
  useRef,
} from "react";

type SequenceContext = {
  started: boolean;
  onDone: () => void;
  _id: string;
};

const context = createContext<{ useSequence: () => SequenceContext }>({
  useSequence: () => ({ started: false, onDone: () => {}, _id: "" }),
});

export const Sequencer: React.FC<{
  children: React.ReactNode;
  started?: boolean;
}> = ({ children, started = true }) => {
  const idsRef = useRef<string[]>([]);
  const doneMapRef = useRef<Record<string, boolean>>({});
  const startedRef = useRef(started);
  startedRef.current = started;

  const rerender = useReducer((x) => x + 1, 0)[1];

  function useSequence(): SequenceContext {
    const id = useId();
    useEffect(() => {
      idsRef.current = [...idsRef.current, id];
      doneMapRef.current[id] = false;
      rerender();

      // Cleanup
      return () => {
        const indexToRemove = idsRef.current.indexOf(id);
        if (indexToRemove !== -1) {
          idsRef.current.splice(indexToRemove, 1);
        }
        delete doneMapRef.current[id];
        rerender();
      };
    }, [id]);

    const started = shouldStart(
      startedRef.current,
      id,
      idsRef.current,
      doneMapRef.current,
    );

    useEffect(() => {
      if (started) {
        const startTime = Date.now();

        const interval = setInterval(() => {
          if (doneMapRef.current[id]) {
            clearInterval(interval);
          } else {
            const timeSinceStarted = (Date.now() - startTime) / 1000;
            console.log(`${id} still not done`, timeSinceStarted.toFixed(1));
          }
        }, 1000);

        return () => clearInterval(interval);
      }
    }, [started]);

    return {
      _id: id,
      started,
      onDone: () => {
        if (!(id in doneMapRef.current)) {
          console.warn("Done but somehow doesn't exist?");
        } else if (!doneMapRef.current[id]) {
          doneMapRef.current[id] = true;
          rerender();
        }
      },
    };
  }

  return (
    <context.Provider value={{ useSequence }}>{children}</context.Provider>
  );
};

export function useSequence(): SequenceContext {
  return useContext(context).useSequence();
}

function shouldStart(
  parentStarted: boolean,
  id: string,
  idList: string[],
  doneMap: Record<string, boolean>,
): boolean {
  if (!parentStarted) {
    return false;
  }
  const index = idList.indexOf(id);
  if (index === -1) {
    // Not in the list yet, so we can't tell if it should start or not
    return false;
  }
  if (index === 0) {
    // Nothing before it, so it's always ready to start
    return true;
  }
  const prevId = idList[index - 1];
  return doneMap[prevId];
}
