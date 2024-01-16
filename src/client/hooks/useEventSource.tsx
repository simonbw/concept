import { useEffect, useRef } from "react";

export function useEventSource<T extends object>(
  url: string | undefined,
  onMessage: (message: unknown) => void,
): void {
  // keep this in a ref so we can access the latest value in the event handler without having to clean up the effect
  const onMessageRef = useRef(onMessage);
  onMessageRef.current = onMessage;

  useEffect(() => {
    if (!url) {
      return;
    }
    const eventSource = new EventSource(url);

    eventSource.onmessage = (event) => {
      const message = JSON.parse(event.data) as unknown;
      onMessageRef.current(message);
    };
    return () => eventSource.close();
  }, [url]);
}
