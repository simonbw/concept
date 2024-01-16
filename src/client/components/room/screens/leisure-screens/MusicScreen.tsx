import React, { useEffect, useReducer, useRef } from "react";
import { beep, rest } from "../../../../../common/utils/beep";
import { useKeyDown } from "../../../../hooks/useKeyDown";
import { Menu, MenuItem } from "../../../Menu";
import { RevealedText } from "../../../effects/RevealedText";
import { RoomScreen } from "../../RoomScreen";
import { Song, songs } from "./songs";

export const MusicScreen: React.FC = () => {
  const { nowPlaying, nowPlayingRef, playSong, stop } = useMusicPlayer();
  return (
    <RoomScreen title="Music">
      <div className="flex gap-4 justify-center">
        <span>
          <RevealedText>[↑↓]</RevealedText>
        </span>
        <span>
          <RevealedText>—</RevealedText>
        </span>
        <span>
          <RevealedText>▶:[⏎]</RevealedText>
        </span>
      </div>

      <br />

      <Menu shouldBeep={nowPlaying === null}>
        {songs.map((song, i) => (
          <MenuItem
            key={i}
            onSelect={() => {
              console.log("select");
              if (nowPlayingRef.current === song) {
                console.log("stop");
                stop();
              } else {
                console.log("play");
                playSong(song);
              }
            }}
            // indicator={nowPlaying === null && <RevealedText> ▶</RevealedText>}
            // className={nowPlaying === i ? "text-inverse" : ""}
          >
            {song.name}
            {nowPlaying === song ? " — NOW PLAYING" : ""}
          </MenuItem>
        ))}
      </Menu>
    </RoomScreen>
  );
};

let playCount = 0;

function useMusicPlayer() {
  const nowPlayingRef = useRef<Song | null>(null);
  const playIdRef = useRef<number | null>(0);
  const rerender = useReducer((x) => x + 1, 0)[1];

  function stop() {
    nowPlayingRef.current = null;
    playIdRef.current = null;
    rerender();
  }

  async function playSong(song: Song) {
    if (nowPlayingRef.current === song) {
      console.log("already playing that song");
      return;
    }
    if (nowPlayingRef.current !== null) {
      console.log("stopping");
      stop();
      await rest(100);
    }

    console.log("playing");
    nowPlayingRef.current = song;
    const playId = ++playCount;
    playIdRef.current = playId;

    rerender();

    const noteDuration = (60 * 1000) / song.tempo;
    const transpose = song.transpose ?? 0;
    for (const note of song.notes) {
      const waveType = note.waveType ?? song.waveType;
      if (playIdRef.current !== playId) {
        return;
      }
      if (note.pitch !== undefined) {
        await beep({
          pitch: note.pitch + transpose,
          duration: note.duration * noteDuration - 10,
          waveType,
        });
        await rest(10);
      } else {
        await rest(note.duration * noteDuration);
      }
    }

    stop();
  }

  useKeyDown((event) => {
    if (event.code === "Escape") {
      stop();
    }
  });

  useEffect(() => {
    return () => {
      stop();
    };
  }, []);

  return {
    nowPlayingRef,
    nowPlaying: nowPlayingRef.current,
    playSong,
    stop,
  };
}
