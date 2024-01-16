import { getAudioContext } from "./getAudioContext";

export type BeepWaveType = Exclude<OscillatorType, "custom">;

export async function beep({
  pitch = 0,
  duration = 100,
  volume: volume = 1,
  waveType = "square",
}: {
  pitch?: number;
  /** Length of the beep in milliseconds */
  duration?: number;
  volume?: number;
  waveType?: BeepWaveType;
} = {}): Promise<void> {
  return new Promise((resolve) => {
    var context = getAudioContext();
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();
    gainNode.gain.setValueAtTime(0, context.currentTime);
    gainNode.gain.linearRampToValueAtTime(
      volumeToGain(volume),
      context.currentTime + duration * 0.001 * 0.05,
    );
    oscillator.connect(gainNode);
    oscillator.frequency.value = getFrequency(pitch);
    oscillator.type = waveType;
    gainNode.connect(context.destination);
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + duration * 0.001);
    oscillator.onended = () => resolve();
  });
}

export async function rest(duration: number = 100): Promise<void> {
  return beep({ volume: 0, duration });
}

export async function victoryBeep(): Promise<void> {
  await rest(100);
  await beep({ pitch: 0, duration: 80 });
  await rest(20);
  await beep({ pitch: 4, duration: 80 });
  await rest(20);
  await beep({ pitch: 7, duration: 80 });
  await rest(20);
  await beep({ pitch: 12, duration: 50 });
  await rest(150);
  await beep({ pitch: 12, duration: 80 });
  await rest(20);
  await beep({ pitch: 12, duration: 80 });
  await rest(20);
  await beep({ pitch: 12, duration: 120 });
}

export async function lossBeep(): Promise<void> {
  await rest(100);
  await beep({ pitch: 12, duration: 50 });
  await rest(150);
  await beep({ pitch: 12, duration: 80 });
  await rest(20);
  await beep({ pitch: 12, duration: 80 });
  await rest(20);
  await beep({ pitch: 12, duration: 80 });
  await rest(20);
  await beep({ pitch: 7, duration: 80 });
  await rest(20);
  await beep({ pitch: 3, duration: 80 });
  await rest(20);
  await beep({ pitch: 0, duration: 120 });
  await rest(20);
}

export async function tieBeep(): Promise<void> {
  await rest(100);
  await beep({ pitch: 6, duration: 100 });
  await rest(50);
  await beep({ pitch: 6, duration: 100 });
  await rest(50);
  await beep({ pitch: 6, duration: 100 });
  await rest(50);
  await beep({ pitch: 6, duration: 100 });
  await rest(50);
  await beep({ pitch: 6, duration: 300 });
  await rest(50);
}

export async function incorrectBeep(): Promise<void> {
  await beep({ pitch: 4 });
  await beep({ pitch: 0 });
}

function getFrequency(note: number): number {
  return Math.pow(2, (note - 8) / 12) * 440;
}

function volumeToGain(volume: number): number {
  return volume / 10;
}
