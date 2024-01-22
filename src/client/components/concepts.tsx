import React, { ReactNode } from "react";
import { range } from "../../common/utils/arrayUtils";
import { classNames } from "../utils/classNames";
import { polarToVec } from "../../common/utils/mathUtils";

export interface ConceptData {
  description: string[];
  icon: ReactNode;
}

export const concepts1: ConceptData[] = [
  {
    description: ["Object", "Box"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-blue-500 to-transparent">
        <span className="text-5xl drop-shadow-md">📦</span>
      </div>
    ),
  },
  {
    description: ["Human", "Society", "Group"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-orange-400/50 to-orange-300/40">
        <span className="text-3xl drop-shadow-md">👥👥</span>
      </div>
    ),
  },
  {
    description: ["Human", "Real", "Historical"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-orange-600/80 to-orange-600/90">
        <span className="text-5xl drop-shadow-md">🎩</span>
      </div>
    ),
  },
  {
    description: ["Character", "Fictional", "Imaginary"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-blue-600 to-blue-500/50">
        <span className="text-5xl drop-shadow-md">🧚</span>
      </div>
    ),
  },
  {
    description: ["Work", "Occupation"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-yellow-300/50 to-yellow-500/90">
        <span className="text-5xl w-8 flex justify-center items-center drop-shadow-md">
          👷
        </span>
        <span className="text-5xl w-8 flex justify-center items-center drop-shadow-md">
          👩‍⚕️
        </span>
      </div>
    ),
  },
  {
    description: ["Hobby", "Sport"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-purple-600 to-purple-700">
        <span className="text-5xl drop-shadow-md">⚽</span>
      </div>
    ),
  },
  {
    description: ["Fauna", "Animal"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-blue-500/50 to-blue-500/25">
        <span className="grid grid-cols-2 grid-rows-2 w-full h-full items-center justify-center">
          <span className="text-3xl drop-shadow-md">🐙</span>
          <span className="text-3xl drop-shadow-md">🦆</span>
          <span className="text-3xl drop-shadow-md">🐄</span>
          <span className="text-3xl drop-shadow-md">🐘</span>
        </span>
      </div>
    ),
  },
  {
    description: ["Flora", "Plant", "Nature"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-blue-500/50 to-blue-500/25">
        <span className="text-3xl">
          <span className="drop-shadow-md">🌱</span>
          <span className="drop-shadow-md">🌳</span>
          <span className="drop-shadow-md">🌹</span>
        </span>
      </div>
    ),
  },
  {
    description: ["Literature", "Writing", "Book"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-brown-500 to-brown-500/25">
        <span className="text-5xl drop-shadow-md">📚</span>
      </div>
    ),
  },
  {
    description: ["Music", "Song"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-amber-700/20 to-amber-700/25">
        <span className="text-5xl drop-shadow-md">🎵</span>
      </div>
    ),
  },
  {
    description: ["Cinema", "Movie"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-sky-300 to-sky-400">
        <span className="text-5xl drop-shadow-md">🎥</span>
      </div>
    ),
  },
  {
    description: ["Art", "Sculpture", "Painting", "Drawing", "Cartoon"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-sky-500 to-sky-300">
        <span className="text-5xl drop-shadow-md">🎨</span>
      </div>
    ),
  },
  {
    description: ["Televison", "Program", "Show"],
    icon: (
      <div className="concept-icon bg-gradient-to-tr from-blue-500 to-blue-700">
        <span className="text-5xl drop-shadow-md">📺</span>
      </div>
    ),
  },
  {
    description: ["Title", "Brand", "Name"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-yellow-500 to-amber-500">
        <span className="text-5xl drop-shadow-md">🏷️</span>
      </div>
    ),
  },
  {
    description: ["Idea", "Intelligence", "Concept"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-indigo-700 to-indigo-800">
        <span className="absolute text-7xl opacity-30">🧠</span>
        <span className="absolute text-5xl drop-shadow-[0_0px_6px_rgba(255,255,255,0.8)]">
          <span>💡</span>
        </span>
      </div>
    ),
  },
  {
    description: ["Expression", "Quote", "Talking", "Words"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-cyan-700 to-cyan-900">
        <span className="text-5xl drop-shadow-md">💬</span>
      </div>
    ),
  },
  {
    description: ["Place", "Country", "World", "Flag"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-indigo-800 to-indigo-900">
        <span className="text-3xl drop-shadow-md flex items-center justify-center">
          <span>⛳️</span>
          <span>🌍</span>
        </span>
      </div>
    ),
  },
  {
    description: ["Building", "Monument", "City"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-sky-500 to-sky-100">
        <span className="text-8xl">🏙️</span>
      </div>
    ),
  },
  {
    description: ["Date", "Event", "Day"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-sky-500 to-sky-200">
        <span className="text-5xl drop-shadow-sm">📅</span>
      </div>
    ),
  },
  {
    description: ["Celebration", "Anniversary", "Holiday"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-yellow-100/50 to-yellow-200/50">
        <span className="text-5xl drop-shadow-sm">🎉</span>
      </div>
    ),
  },
  {
    description: ["Seacraft", "Naval", "Swimming"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-blue-700 to-sky-600">
        <span className="absolute text-7xl opacity-30">🌊</span>
        <span className="absolute text-5xl drop-shadow-sm">🚢</span>
      </div>
    ),
  },
  {
    description: ["Aircraft", "Aerial", "Flying"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-sky-500 to-sky-200">
        <span className="">
          <span className="absolute inset-0 text-8xl text-white/35 flex items-center justify-center">
            ✈️
          </span>
          <span className="absolute top-2 right-2 text-5xl drop-shadow-md">
            🚁
          </span>
        </span>
      </div>
    ),
  },
  {
    description: ["Ground Transportation", "Road"],
    icon: (
      <div className="concept-icon bg-gradient-to-tr from-green-700 to-black">
        <span className="absolute inset-0 text-7xl">🛣️</span>
        <span className="relative text-5xl">🚗</span>
      </div>
    ),
  },
  {
    description: ["Tool", "Construction"],
    icon: (
      <div className="concept-icon bg-gradient-to-tr from-orange-500 to-yellow-100">
        <span className="text-5xl drop-shadow-sm">🔨</span>
      </div>
    ),
  },
  {
    description: ["Game", "Toy"],
    icon: (
      <div className="concept-icon bg-gradient-to-tl from-orange-400 to-yellow-200">
        <span className="absolute right-2 bottom-1 text-4xl w-5 flex justify-center items-center drop-shadow-sm">
          🎲
        </span>
        <span className="absolute left-0 text-6xl flex justify-center items-center drop-shadow-sm">
          🧸
        </span>
      </div>
    ),
  },
  {
    description: ["Clothing", "Accessory", "Costume"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-indigo-400 to-fuchsia-400">
        <span className="absolute text-6xl left-0 drop-shadow-sm">👗</span>
        <span className="relative text-4xl left-3 top-1 drop-shadow-md">
          👔
        </span>
      </div>
    ),
  },
  {
    description: ["Food", "Eating", "Edible"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-orange-400 to-amber-300">
        <span className="grid grid-cols-2 grid-rows-2 w-full h-full items-center justify-center">
          <span className="text-3xl drop-shadow-md">🥛</span>
          <span className="text-3xl drop-shadow-md">🍔</span>
          <span className="text-3xl drop-shadow-md">🍜</span>
          <span className="text-3xl drop-shadow-md">🍽️</span>
        </span>
      </div>
    ),
  },
  {
    description: ["House", "Dwelling", "Room", "Domestic"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-sky-900/70 to-sky-100/60">
        <span className="text-5xl drop-shadow-sm">🏠</span>
      </div>
    ),
  },
];

export const concepts2: ConceptData[] = [
  {
    description: ["Baby", "Child", "Young", "New"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-orange-300/50 to-orange-200/30">
        <span className="text-3xl">👶🧒</span>
      </div>
    ),
  },
  {
    description: ["Adult", "Elderly", "Old", "Past"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-gray-200 to-gray-400">
        <span className="text-3xl">👴👵</span>
      </div>
    ),
  },
  {
    description: ["Feminine", "Female"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-white to-pink-300 relative">
        <span className="absolute -top-1 -left-1 text-5xl text-pink-800">
          ♀️
        </span>
        <span className="absolute bottom-1 right-1 text-[2.5rem] drop-shadow-md">
          👩
        </span>
      </div>
    ),
  },
  {
    description: ["Masculine", "Male"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-white to-blue-300">
        <span className="absolute -top-1 left-0 text-5xl text-blue-800">
          ♂️
        </span>
        <span className="absolute bottom-1 right-1 text-[2.5rem] drop-shadow-md">
          🧔‍♂️
        </span>
      </div>
    ),
  },
  {
    description: ["Slow", "Slow Motion"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-black to-black">
        <span className="text-5xl">🐢</span>
      </div>
    ),
  },
  {
    description: ["Fast", "Race"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-black to-black">
        <span className="text-5xl">🐇</span>
      </div>
    ),
  },
  {
    description: ["Defense", "Protection", "Wall"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-sky-800 to-sky-600">
        <span className="text-5xl">🛡️</span>
      </div>
    ),
  },
  {
    description: ["Attack", "Conflict", "Combat", "Weapon"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-black to-black">
        <span className="text-5xl">⚔️</span>
      </div>
    ),
  },
  {
    description: ["Life", "Heart", "Love"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-fuchsia-200 to-pink-100">
        <span className="text-5xl">❤️</span>
      </div>
    ),
  },
  {
    description: ["Death", "Bad", "Illness"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-red-800 to-black">
        <span className="text-5xl">💀</span>
      </div>
    ),
  },
  {
    description: ["Happy", "Positive"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-sky-500 to-white">
        <span className="text-5xl">😀</span>
      </div>
    ),
  },
  {
    description: ["Sad", "Negative"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-sky-600 to-cyan-900">
        <span className="text-5xl">😥</span>
      </div>
    ),
  },
  {
    description: ["Electronic", "Computing"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-green-700 to-green-600">
        <span className="text-5xl">💻</span>
      </div>
    ),
  },
  {
    description: ["Mechanical", "Industrial"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-700 to-slate-600">
        <span className="text-3xl">⚙️🏭</span>
      </div>
    ),
  },
  {
    description: ["Money", "Rich", "Expensive"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-red-600 to-red-700">
        <span className="absolute top-2 left-2 text-5xl drop-shadow-md -rotate-45">
          🧧
        </span>
        <span className="absolute bottom-0 right-0 text-[3rem] drop-shadow-md rotate-12">
          💰
        </span>
      </div>
    ),
  },
  {
    description: ["Time", "Duration"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-black to-white">
        <span className="relative top-2.5 text-[7.5rem] flex items-center justify-center">
          🕰️
        </span>
      </div>
    ),
  },
  {
    description: ["Religion", "Myth", "Spirituality"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-white to-yellow-500">
        <span className="text-5xl drop-shadow-md">🕍</span>
      </div>
    ),
  },
  {
    description: ["Power", "Politics"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-red-900 to-red-600">
        <span className="text-5xl drop-shadow-md">👑</span>
      </div>
    ),
  },
  {
    description: ["Science", "Math"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-slate-900 to-brown-600">
        <span className="absolute text-5xl drop-shadow-md -rotate-12">🧮</span>
        <span className="absolute right-1 bottom-1 text-4xl drop-shadow-md">
          🧪
        </span>
      </div>
    ),
  },
  {
    description: ["Medical", "Medicine", "Health"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-green-950 to-green-950">
        <span className="absolute right-1 bottom-1 text-5xl drop-shadow-md">
          🏥
        </span>
        <span className="absolute left-1 top-1 text-5xl drop-shadow-md">
          💉
        </span>
      </div>
    ),
  },
  {
    description: ["Head", "Face", "Neck"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-blue-300 to-white">
        <span className="text-5xl grayscale drop-shadow-sm">🧑‍🦲</span>
      </div>
    ),
  },
  {
    description: ["Arm", "Hand", "Finger"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-blue-300 to-white">
        <span className="text-5xl grayscale drop-shadow-sm">💪</span>
      </div>
    ),
  },
  {
    description: ["Torso", "Stomach", "Body"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-blue-300 to-white">
        <span className="text-9xl text-center w-10 flex justify-center grayscale drop-shadow-sm">
          🧍
        </span>
      </div>
    ),
  },
  {
    description: ["Leg", "Foot"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-blue-300 to-white">
        <span className="text-5xl grayscale drop-shadow-sm">🦵</span>
      </div>
    ),
  },
  {
    description: ["Ear", "Hear", "Sound"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-blue-300 to-white">
        <span className="text-5xl grayscale drop-shadow-sm">👂</span>
      </div>
    ),
  },
  {
    description: ["Nose", "Scent", "Smelling"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-blue-300 to-white">
        <span className="text-5xl grayscale drop-shadow-sm">👃</span>
      </div>
    ),
  },
  {
    description: ["Eye", "Sight"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-blue-300 to-white">
        <span className="text-5xl grayscale drop-shadow-sm">👁️</span>
      </div>
    ),
  },
  {
    description: ["Mouth", "Taste"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-blue-300 to-white">
        <span className="text-5xl grayscale drop-shadow-sm">👄</span>
      </div>
    ),
  },
];

export const concepts3: ConceptData[] = [
  {
    description: ["Cold", "Snow / Rain", "Cloud"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-slate-100 to-slate-500">
        <span className="text-5xl drop-shadow-md">🌧️</span>
      </div>
    ),
  },
  {
    description: ["Hot", "Day / Light", "Sun"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-sky-500 to-sky-100">
        <span className="text-5xl drop-shadow-[0_0_4px_rgba(255,250,240,0.99)]">
          ☀️
        </span>
      </div>
    ),
  },
  {
    description: ["Night / Evening", "Space", "Moon / Stars"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-purple-900 to-black">
        <span className="text-3xl">🌙✨</span>
      </div>
    ),
  },
  {
    description: ["Lightning / Storm", "Electricity", "Anger"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-gray-500 to-purple-800">
        <span className="text-5xl drop-shadow-md">🌩️</span>
      </div>
    ),
  },
  {
    description: ["Fire", "Burn", "Cooking"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-red-500 to-orange-400">
        <span className="text-5xl drop-shadow-[0_0_5px_rgba(255,210,100,0.99)]">
          🔥
        </span>
      </div>
    ),
  },
  {
    description: ["Water", "Liquid", "Aquatic"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-blue-500 to-cyan-500">
        <span className="text-5xl drop-shadow-[0_5px_6px_rgba(0,50,255,0.4)]">
          💧
        </span>
      </div>
    ),
  },
  {
    description: ["Air", "Wind", "Blowing"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-sky-500 to-sky-200">
        <span className="text-5xl">💨</span>
      </div>
    ),
  },
  {
    description: ["Earth", "Ground"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-amber-400 to-brown-600">
        <span className="text-5xl">🌎</span>
      </div>
    ),
  },
  {
    description: ["Stone", "Mineral", "Hard"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600">
        <span className="text-5xl">🪨</span>
      </div>
    ),
  },
  {
    description: ["Wood"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600">
        <span className="text-5xl drop-shadow-sm">🪵</span>
      </div>
    ),
  },
  {
    description: ["Metal"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600">
        <span className="text-5xl drop-shadow-sm">🔩</span>
      </div>
    ),
  },
  {
    description: ["Fabric"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600">
        <span className="text-5xl drop-shadow-sm">🧶</span>
      </div>
    ),
  },
  {
    description: ["Rubber", "Plastic"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600">
        <span className="text-5xl drop-shadow-sm">♳</span>
      </div>
    ),
  },
  {
    description: ["Paper", "Sheet"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600">
        <span className="text-5xl drop-shadow-sm">📄</span>
      </div>
    ),
  },
  {
    description: ["Opposite", "Reverse"],
    icon: (
      <div className="flex justify-stretch items-stretch w-full h-full tracking-[-0.25em]">
        <span className="text-4xl w-[50%] grow h-full text-black bg-white flex items-center justify-end">
          <span>←</span>
        </span>
        <span className="text-4xl w-[50%] grow h-full text-white bg-black flex items-center justify-start">
          <span className="scale-x-[-1]">←</span>
        </span>
      </div>
    ),
  },
  {
    description: ["Cut / Break", "Separation", "Half"],
    icon: (
      <div className="concept-icon bg-gradient-to-bl from-sky-500 to-sky-300">
        <span className="text-5xl">✂️</span>
      </div>
    ),
  },
  {
    description: ["Fragment", "Multitude", "Cluster"],
    // TODO: Better icon for this one
    icon: (
      <div className="concept-icon bg-gradient-to-bl from-sky-500 to-sky-300">
        <span className="text-5xl">🔢</span>
      </div>
    ),
  },
  {
    description: ["Part", "Fragment", "Assembly"],
    icon: (
      <div className="concept-icon bg-gradient-to-bl from-sky-500 to-sky-300">
        <span className="text-5xl">🧩</span>
      </div>
    ),
  },
  {
    description: ["Inside", "Internal"],
    icon: (
      <div className="concept-icon bg-gradient-to-bl from-sky-500 to-sky-300">
        <span className="text-5xl">📥</span>
      </div>
    ),
  },
  {
    description: ["Grill / Wire", "Network", "Grid"],
    icon: (
      <div className="concept-icon bg-gradient-to-bl from-sky-500 to-sky-300">
        <div className="grid grid-cols-6 grid-rows-6 w-full h-full">
          {Array.from({ length: 6 * 6 }).map((_, i) => (
            <span className="border border-gray-600" />
          ))}
        </div>
      </div>
    ),
  },
  {
    description: ["Zero", "Nonce", "Nothing"],
    icon: (
      <div className="concept-icon bg-gradient-to-bl from-sky-500 to-sky-300">
        <span className="text-5xl">0️⃣</span>
      </div>
    ),
  },
  {
    description: ["One", "Unit", "Number"],
    icon: (
      <div className="concept-icon bg-gradient-to-bl from-sky-500 to-sky-300">
        <span className="text-5xl">1️⃣</span>
      </div>
    ),
  },
];

const PaperGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
      {Array.from({ length: 12 * 12 }).map((_, i) => (
        <span className="border-[0.5px] border-gray-600/25" />
      ))}
    </div>
  );
};

const ThreeDGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-b from-sky-400/50 to-slate-100">
      <div className="w-full h-[50%]">
        <div className="grid grid-cols-12 grid-rows-12 w-full h-full">
          {Array.from({ length: 12 * 12 }).map((_, i) => (
            <span className="border-[0.5px] border-gray-600/25" />
          ))}
        </div>
      </div>
    </div>
  );
};

export const concepts4: ConceptData[] = [
  {
    description: ["Line / Straight", "Diagonal", "Stiff"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <PaperGrid />
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <line
            x1={10}
            y1={90}
            x2={90}
            y2={10}
            className="stroke-blue-600 fill-none"
            strokeWidth={12}
          />
          <line
            x1={10}
            y1={90}
            x2={90}
            y2={10}
            className="stroke-blue-500 fill-none"
            strokeWidth={6}
          />
        </svg>
      </div>
    ),
  },
  {
    description: ["Arc / Curve", "Rounded", "Flexible"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <PaperGrid />
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <path
            d="M 15 90, Q 10 10 90 15"
            fill="none"
            className="stroke-blue-600 fill-none"
            strokeWidth={12}
          />
          <path
            d="M 15 90, Q 10 10 90 15"
            fill="none"
            className="stroke-blue-500 fill-none"
            strokeWidth={6}
          />
        </svg>
      </div>
    ),
  },
  {
    description: ["Cross", "Crossing", "Addition"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <PaperGrid />
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <line
            x1={10}
            y1={50}
            x2={90}
            y2={50}
            className="stroke-blue-600 fill-none"
            strokeWidth={12}
            strokeLinecap="round"
          />
          <line
            x1={50}
            y1={10}
            x2={50}
            y2={90}
            className="stroke-blue-600 fill-none"
            strokeWidth={12}
            strokeLinecap="round"
          />
          <line
            x1={10}
            y1={50}
            x2={90}
            y2={50}
            className="stroke-blue-500 fill-none"
            strokeWidth={6}
            strokeLinecap="round"
          />
          <line
            x1={50}
            y1={10}
            x2={50}
            y2={90}
            className="stroke-blue-500 fill-none"
            strokeWidth={6}
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
  },
  {
    description: ["Angles", "Sharp", "Jagged"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <PaperGrid />
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <path
            d="M 10 85, L 30 20, L 50 65, L 70 30 L 90 60"
            className="stroke-blue-600 fill-none"
            strokeLinecap="round"
            strokeWidth={12}
          />
          <path
            d="M 10 85, L 30 20, L 50 65, L 70 30 L 90 60"
            className="stroke-blue-500 fill-none"
            strokeLinecap="round"
            strokeWidth={6}
          />
        </svg>
      </div>
    ),
  },
  {
    description: ["Spiral", "Drunkenness", "Coil"],
    // TODO: Redo this with an SVG
    icon: (() => {
      const d =
        "M 50 50" +
        range(0, 350)
          .map((i) => {
            const [x, y] = polarToVec((i * Math.PI) / 64, i * 0.125);
            return `T ${50 + x},${50 + y}`;
          })
          .join(" ");
      return (
        <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
          <PaperGrid />
          <svg className="w-full h-full relative" viewBox="0 0 100 100">
            <path
              d={d}
              className="stroke-blue-600 fill-none"
              strokeLinecap="round"
              strokeWidth={12}
            />
            <path
              d={d}
              className="stroke-blue-500 fill-none"
              strokeLinecap="round"
              strokeWidth={6}
            />
          </svg>
        </div>
      );
    })(),
  },
  {
    description: ["Wavy", "Ripple", "Hair"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <PaperGrid />
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <path
            d="M 10,25 T 28,15, T 30,55, T 55,65 T 85,80"
            className="stroke-blue-600 fill-none"
            strokeLinecap="round"
            strokeWidth={12}
          />
          <path
            d="M 10,25 T 28,15, T 30,55, T 55,65 T 85,80"
            className="stroke-blue-500 fill-none"
            strokeLinecap="round"
            strokeWidth={6}
          />
        </svg>
      </div>
    ),
  },
  {
    description: ["Circle", "Ring"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <PaperGrid />
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <circle
            cx={50}
            cy={50}
            r={35}
            className="fill-none stroke-blue-600"
            strokeWidth={12}
          />
          <circle
            cx={50}
            cy={50}
            r={35}
            className="fill-none stroke-blue-500"
            strokeWidth={6}
          />
        </svg>
      </div>
    ),
  },
  {
    description: ["Round"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <PaperGrid />
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <circle
            cx={50}
            cy={50}
            r={35}
            className="stroke-blue-600 fill-blue-500"
            strokeWidth={4}
          />
        </svg>
      </div>
    ),
  },
  {
    description: ["Triangle"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <PaperGrid />
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <polygon
            points="50,20 80,80 20,80"
            className="stroke-blue-600 fill-blue-500"
            strokeWidth={4}
          />
        </svg>
      </div>
    ),
  },
  {
    description: ["Star"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <PaperGrid />
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <polygon
            points="50,20 80,80 20,80"
            className="stroke-blue-600 fill-blue-500"
            strokeWidth={4}
          />
        </svg>
      </div>
    ),
  },
  {
    description: ["Square", "Rectangle"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <PaperGrid />
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <rect
            x={30}
            y={20}
            width={40}
            height={60}
            className="stroke-blue-600 fill-blue-500"
            strokeWidth={4}
          />
        </svg>
      </div>
    ),
  },
  {
    description: ["Flat"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ThreeDGrid />
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <polygon
            points="30,60 70,60 80,80 20,80"
            className="stroke-blue-600 fill-blue-500"
            strokeWidth={4}
          />
        </svg>
      </div>
    ),
  },
  {
    description: ["Cube"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ThreeDGrid />
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <polygon
            points="20,30 50,40 50,90 20,80"
            className="stroke-blue-600 fill-blue-500"
            strokeWidth={4}
            strokeLinejoin="round"
          />
          <polygon
            points="20,30 50,40 80,30 50,20"
            className="stroke-blue-600 fill-blue-400"
            strokeWidth={4}
            strokeLinejoin="round"
          />
          <polygon
            points="50,40 80,30 80,80 50,90"
            className="stroke-blue-600 fill-blue-600"
            strokeWidth={4}
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
  },
  {
    description: ["Sphere"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ThreeDGrid />

        <svg
          className="w-full h-full relative text-blue-700"
          viewBox="0 0 100 100"
        >
          <defs>
            <radialGradient id="sphereGradient" cx="25%" cy="25%" r="100%">
              <stop offset="0%" stopColor="white" />
              <stop offset="70%" stopColor="currentColor" />
            </radialGradient>
          </defs>
          <circle
            cx={50}
            cy={55}
            r={30}
            className="stroke-blue-700"
            fill="url(#sphereGradient)"
            strokeWidth={4}
          />
        </svg>
      </div>
    ),
  },
  {
    description: ["Pyramid"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ThreeDGrid />
        <svg className="w-full h-full relative" viewBox="0 0 100 100">
          <polygon
            points="50,20 50,90 20,80"
            className="stroke-blue-600 fill-blue-400"
            strokeWidth={4}
            strokeLinejoin="round"
          />
          <polygon
            points="50,20 80,80 50,90"
            className="stroke-blue-600 fill-blue-600"
            strokeWidth={4}
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
  },
  {
    description: ["Cylinder"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ThreeDGrid />
        <svg
          className="w-full h-full relative text-blue-700"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient
              id="cylinderGradient"
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
            >
              <stop offset="0%" stopColor="white" />
              <stop offset="70%" stopColor="currentColor" />
            </linearGradient>
          </defs>
          <path
            d="M 20,20 L 80,20 L 80,80 Q 50,92 20,80 Z"
            className="stroke-blue-600"
            fill="url(#cylinderGradient)"
            strokeWidth={4}
            strokeLinejoin="round"
          />
          <ellipse
            cx={50}
            cy={20}
            rx={30}
            ry={10}
            className="stroke-blue-600 fill-blue-400"
            strokeWidth={4}
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
  },
  {
    description: ["Cone"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ThreeDGrid />
        <svg
          className="w-full h-full relative text-blue-700"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient
              id="coneGradient"
              x1="0%"
              y1="25%"
              x2="100%"
              y2="75%"
            >
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="currentColor" />
            </linearGradient>
          </defs>
          <path
            d="M 50,20 L 80,80 Q 50,92 20,80 Z"
            className="stroke-blue-600"
            fill="url(#coneGradient)"
            strokeWidth={4}
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
  },
  {
    description: ["Hollow", "Hole", "Pierced"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ThreeDGrid />
        <span className="text-5xl relative pt-2">🕳️</span>
      </div>
    ),
  },
  {
    description: ["Big", "High"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600 relative flex justify-center items-center w-full gap-1">
        <PaperGrid />
        <span className="w-[35%] shrink-0 flex items-center justify-center">
          <span className="relative text-5xl inline-block rotate-90">⇤</span>
        </span>
        <span className="relative w-[35%] h-[75%] shrink-0 bg-yellow-400 border-2 border-amber-500 outline-1 outline-black/50 outline" />
      </div>
    ),
  },
  {
    description: ["Small", "Low"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600 relative flex justify-center items-center w-full">
        <PaperGrid />
        <div className="flex items-end justify-center gap-2 h-[75%]">
          <span className="w-[35%] shrink-0 flex items-center justify-center">
            <span className="relative text-5xl inline-block -rotate-90">⇤</span>
          </span>
          <span className="relative w-[45%] h-[20%] shrink-0 bg-yellow-400 border-2 border-amber-500 outline-1 outline-black/50 outline" />
        </div>
      </div>
    ),
  },
  {
    description: ["Fat", "Large", "Long"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600 relative flex justify-center items-center w-full">
        <PaperGrid />
        <div className="flex flex-col items-center justify-center h-[75%] gap-1">
          <span className="shrink-0 h-[50%] flex items-center justify-center">
            <span className="relative text-3xl flex items-center justify-center tracking-[-0.2em]">
              <span>⇤</span>
              <span className="scale-x-[-1]">⇤</span>
            </span>
          </span>
          <span className="relative w-[100%] h-[50%] shrink-0 bg-yellow-400 border-2 border-amber-500 outline-1 outline-black/50 outline" />
        </div>
      </div>
    ),
  },
  {
    description: ["Thin / Fine", "Narrow", "Short"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600 relative flex justify-center items-center w-full">
        <PaperGrid />
        <div className="flex flex-col items-center justify-center h-[75%] gap-1">
          <span className="shrink-0 h-[50%] flex items-center justify-center">
            <span className="relative text-3xl flex items-center justify-center tracking-[-0.2em]">
              <span className="scale-x-[-1]">⇤</span>
              <span>⇤</span>
            </span>
          </span>
          <span className="relative w-[20%] h-[50%] shrink-0 bg-yellow-400 border-2 border-amber-500 outline-1 outline-black/50 outline" />
        </div>
      </div>
    ),
  },
  {
    description: ["High", "Climb", "Above"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600 relative">
        <PaperGrid />
        <div className="relative flex flex-col h-full w-full items-center justify-end">
          <span
            className="text-6xl text-yellow-400"
            style={{ WebkitTextStroke: "1px brown" }}
          >
            ↥
          </span>
          <span className="h-[20%] w-full bg-black" />
        </div>
      </div>
    ),
  },
  {
    description: ["Low", "Descend", "Below"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600 relative">
        <PaperGrid />
        <div className="relative flex flex-col h-full w-full items-center justify-end rotate-180">
          <span
            className="text-6xl text-yellow-400"
            style={{ WebkitTextStroke: "1px brown" }}
          >
            ↥
          </span>
          <span className="h-[20%] w-full bg-black" />
        </div>
      </div>
    ),
  },
  {
    description: ["Left", "Beginning", "Before / Past"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600 relative">
        <PaperGrid />
        <div className="relative flex flex-col h-full w-full items-center justify-end -rotate-90">
          <span
            className="text-6xl text-yellow-400"
            style={{ WebkitTextStroke: "1px brown" }}
          >
            ↥
          </span>
          <span className="h-[20%] w-full bg-black" />
        </div>
      </div>
    ),
  },
  {
    description: ["Right", "End", "After / Future"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600 relative">
        <PaperGrid />
        <div className="relative flex flex-col h-full w-full items-center justify-end rotate-90">
          <span
            className="text-6xl text-yellow-400"
            style={{ WebkitTextStroke: "1px brown" }}
          >
            ↥
          </span>
          <span className="h-[20%] w-full bg-black" />
        </div>
      </div>
    ),
  },
  {
    description: ["Turn", "Around", "Cycle / Repetition"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600 relative">
        <PaperGrid />
        <span className="text-5xl relative">🔄</span>
      </div>
    ),
  },
  {
    description: ["Use / Action", "Do / Verb", "Button"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600 relative">
        <PaperGrid />
        <span className="text-5xl relative">🔘</span>
      </div>
    ),
  },
];

const ColorBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 bg-gradient-to-br from-brown-600 to-brown-700">
      {Array.from({ length: 3 * 3 }).map((_, i) => (
        <span
          className={classNames(
            i % 2 === 0 ? "bg-amber-400/40" : "bg-brown-300 / 30"
          )}
        />
      ))}
    </div>
  );
};

export const concepts5: ConceptData[] = [
  {
    description: ["Red"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600 relative">
        <ColorBackground />
        <span className="relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-gradient-to-br from-red-500 to-red-600 border-red-700 drop-shadow-md" />
      </div>
    ),
  },
  {
    description: ["Orange"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ColorBackground />
        <span className="relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 border-orange-700 drop-shadow-md" />
      </div>
    ),
  },
  {
    description: ["Yellow"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ColorBackground />
        <span className="relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-gradient-to-br from-yellow-300 to-yellow-400 border-yellow-500 drop-shadow-md" />
      </div>
    ),
  },
  {
    description: ["Green"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ColorBackground />
        <span className="relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-gradient-to-br from-green-500 to-green-600 border-green-700 drop-shadow-md" />
      </div>
    ),
  },
  {
    description: ["Blue"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ColorBackground />
        <span className="relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 border-blue-700 drop-shadow-md" />
      </div>
    ),
  },
  {
    description: ["Purple"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ColorBackground />
        <span className="relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 border-purple-900 drop-shadow-md" />
      </div>
    ),
  },
  {
    description: ["Pink"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ColorBackground />
        <span className="relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-gradient-to-br from-pink-400 to-pink-500 border-pink-600 drop-shadow-md" />
      </div>
    ),
  },
  {
    description: ["Brown"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ColorBackground />
        <span className="relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-gradient-to-br from-brown-600 to-brown-700 border-brown-800 drop-shadow-md" />
      </div>
    ),
  },
  {
    description: ["Black"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ColorBackground />
        <span className="relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-gradient-to-br from-slate-900 to-black border-slate-700 drop-shadow-md" />
      </div>
    ),
  },
  {
    description: ["Gray"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ColorBackground />
        <span className="relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-gradient-to-br from-gray-500 to-gray-600 border-gray-600 drop-shadow-md" />
      </div>
    ),
  },
  {
    description: ["White"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ColorBackground />
        <span className="relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-gradient-to-br from-white to-gray-100 border-gray-200 drop-shadow-md" />
      </div>
    ),
  },
  {
    description: ["Transparent", "Invisible", "Glass"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ColorBackground />
        <span className="relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-gradient-to-br from-white/90 to-white/10 border-white/90 drop-shadow-md" />
      </div>
    ),
  },
];

export const concepts: readonly ConceptData[] = [
  ...concepts1,
  ...concepts2,
  ...concepts3,
  ...concepts4,
  ...concepts5,
];
