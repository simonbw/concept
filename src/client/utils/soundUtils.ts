import { objectEntries } from "../../common/utils/arrayUtils";

let audioContext: AudioContext;

export function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
}

export function mute() {
  getAudioContext().suspend();
}

export function unmute() {
  getAudioContext().resume();
}

const SOUNDS = {
  "pick-up": "/static/audio/pick-up.flac",
  "set-down": "/static/audio/set-down.flac",
};

export type SoundName = keyof typeof SOUNDS;

const buffers = new Map<SoundName, AudioBuffer>();

for (const [soundName, url] of objectEntries(SOUNDS)) {
  loadSound(soundName, url);
}

export function playSound(name: SoundName) {
  const buffer = buffers.get(name);
  if (!buffer) {
    console.warn(`Sound not loaded: ${name}`);
    return;
  }
  if (getAudioContext().state !== "suspended") {
    const source = getAudioContext().createBufferSource();
    source.buffer = buffer;
    source.connect(getAudioContext().destination);
    source.start();
  }
}

export async function loadSound(
  name: SoundName,
  url: string
): Promise<AudioBuffer> {
  return fetch(url)
    .then((response) => response.arrayBuffer())
    .then((data) => getAudioContext().decodeAudioData(data))
    .then((buffer) => {
      buffers.set(name, buffer);
      return buffer;
    });
}
