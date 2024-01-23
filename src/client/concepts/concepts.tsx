import React, { ReactNode } from "react";
import { colorConcepts } from "./colorConcepts";
import { geometryConcepts } from "./geometryConcepts";

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
        <span className="absolute text-[5.5rem] opacity-60 -top-4">👤</span>
        <span className="absolute top-1 text-[2.75rem] leading-none drop-shadow-[0_0px_6px_rgba(255,255,255,0.8)]">
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
        <span className="text-3xl drop-shadow-sm">👶🧒</span>
      </div>
    ),
  },
  {
    description: ["Adult", "Elderly", "Old", "Past"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-gray-200 to-gray-400">
        <span className="text-3xl drop-shadow-sm">👴👵</span>
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
    description: ["Slow", "Slow Motion", "Turtle"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-black to-black">
        <span className="text-5xl drop-shadow-sm">🐢</span>
      </div>
    ),
  },
  {
    description: ["Fast", "Race", "Rabbit"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-black to-black">
        <span className="text-5xl drop-shadow-sm">🐇</span>
      </div>
    ),
  },
  {
    description: ["Defense", "Protection", "Wall"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-sky-800 to-sky-600">
        <span className="text-5xl drop-shadow-sm">🛡️</span>
      </div>
    ),
  },
  {
    description: ["Attack", "Conflict", "Combat", "Weapon"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-black to-black">
        <span className="text-5xl drop-shadow-sm">⚔️</span>
      </div>
    ),
  },
  {
    description: ["Life", "Heart", "Love"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-fuchsia-200 to-pink-100">
        <span className="text-5xl drop-shadow-sm">❤️</span>
      </div>
    ),
  },
  {
    description: ["Death", "Bad", "Illness"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-red-800 to-black">
        <span className="text-5xl drop-shadow-sm">💀</span>
      </div>
    ),
  },
  {
    description: ["Happy", "Positive"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-sky-500 to-white">
        <span className="text-5xl drop-shadow-sm">😀</span>
      </div>
    ),
  },
  {
    description: ["Sad", "Negative"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-sky-600 to-cyan-900">
        <span className="text-5xl drop-shadow-sm">😥</span>
      </div>
    ),
  },
  {
    description: ["Electronic", "Computing"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-green-700 to-green-600">
        <span className="text-5xl drop-shadow-sm">💻</span>
      </div>
    ),
  },
  {
    description: ["Mechanical", "Industrial"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-700 to-slate-600">
        <span className="text-3xl drop-shadow-sm">⚙️🏭</span>
      </div>
    ),
  },
  {
    description: ["Money", "Rich", "Expensive"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-red-600 to-red-700">
        <span className="absolute top-2 left-2 text-5xl drop-shadow-sm -rotate-45">
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
        <span className="text-5xl drop-shadow-sm">✂️</span>
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
        <span className="text-5xl drop-shadow-sm">🧩</span>
      </div>
    ),
  },
  {
    description: ["Inside", "Internal"],
    icon: (
      <div className="concept-icon bg-gradient-to-bl from-sky-500 to-sky-300">
        <span className="text-5xl drop-shadow-sm">📥</span>
      </div>
    ),
  },
  {
    description: ["Grill / Wire", "Network", "Grid"],
    icon: (
      <div className="concept-icon bg-gradient-to-bl from-sky-500 to-sky-300">
        <div className="grid grid-cols-6 grid-rows-6 w-full h-full drop-shadow-sm">
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

function evens(_: unknown, i: number) {
  return i % 2 == 0;
}

function odds(_: unknown, i: number) {
  return !evens(_, i);
}

export const conceptColumns: readonly ConceptData[][] = [
  concepts1.filter(evens),
  concepts1.filter(odds),
  concepts2.filter(evens),
  concepts2.filter(odds),
  concepts3.filter(evens),
  concepts3.filter(odds),
  geometryConcepts.filter(evens),
  geometryConcepts.filter(odds),
  colorConcepts,
];
