import { useState } from "react";

export function useMediaStream(): MediaStream | undefined {
  const [stream, setStream] = useState<MediaStream | undefined>();
  // Get the local stream
  // useEffect(() => {
  //   navigator.mediaDevices
  //     .getUserMedia({ video: true, audio: true })
  //     .then((stream) => setStream(stream));
  // }, []);

  return stream;
}
