import { BeepWaveType } from "../../../../../common/utils/beep";

export interface Song {
  name: string;
  tempo: number;
  transpose?: number;
  waveType?: BeepWaveType;
  notes: {
    pitch?: number | undefined;
    duration: number;
    waveType?: BeepWaveType;
  }[];
}

export const songs: Song[] = [
  {
    name: "Song 1",
    tempo: 300,
    notes: [
      { pitch: 4, duration: 1 },
      { pitch: 2, duration: 1 },
      { pitch: 0, duration: 1 },
      { pitch: 2, duration: 1 },
      { pitch: 4, duration: 1 },
      { pitch: 4, duration: 1 },
      { pitch: 4, duration: 2 },
      { pitch: 2, duration: 1 },
      { pitch: 2, duration: 1 },
      { pitch: 2, duration: 2 },
      { pitch: 4, duration: 1 },
      { pitch: 7, duration: 1 },
      { pitch: 7, duration: 2 },
      { pitch: 4, duration: 1 },
      { pitch: 2, duration: 1 },
      { pitch: 0, duration: 1 },
      { pitch: 2, duration: 1 },
      { pitch: 4, duration: 1 },
      { pitch: 4, duration: 1 },
      { pitch: 4, duration: 1 },
      { pitch: 4, duration: 1 },
      { pitch: 2, duration: 1 },
      { pitch: 2, duration: 1 },
      { pitch: 4, duration: 1 },
      { pitch: 2, duration: 1 },
      { pitch: 0, duration: 3 },
    ],
  },
  {
    name: "Song 2",
    tempo: 220,
    waveType: "triangle",
    transpose: 12,
    notes: [
      { pitch: 0, duration: 1 },
      { pitch: 0, duration: 1 },
      { pitch: 7, duration: 1 },
      { pitch: 7, duration: 1 },
      { pitch: 9, duration: 1 },
      { pitch: 9, duration: 1 },
      { pitch: 7, duration: 2 },
      { pitch: 5, duration: 1 },
      { pitch: 5, duration: 1 },
      { pitch: 4, duration: 1 },
      { pitch: 4, duration: 1 },
      { pitch: 2, duration: 1 },
      { pitch: 2, duration: 1 },
      { pitch: 0, duration: 2 },
    ],
  },
  {
    name: "Song 3",
    tempo: 245,
    transpose: 3,
    waveType: "sawtooth",
    notes: [
      { pitch: 0, duration: 3 },
      { pitch: 0, duration: 1 },
      { pitch: 3, duration: 1.0 },
      { duration: 0.4 },
      { pitch: 0, duration: 1.0 },
      { duration: 0.4 },
      { pitch: -2, duration: 1.2 },
      { pitch: -4, duration: 4 },
      { pitch: -5, duration: 4 },
    ],
  },
];
