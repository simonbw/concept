import React, { ReactNode } from "react";
import { classNames } from "../utils/classNames";

export interface ConceptData {
  description: string[];
  icon: ReactNode;
}

export const concepts1: ConceptData[] = [
  {
    description: ["Object", "Box"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-blue-500 to-transparent">
        <span className="text-5xl">📦</span>
      </div>
    ),
  },
  {
    description: ["Human", "Society", "Group"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-orange-400/50 to-orange-300/40">
        <span className="text-3xl">👥👥</span>
      </div>
    ),
  },
  {
    description: ["Human", "Real", "Historical"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-orange-600/80 to-orange-600/90">
        <span className="text-5xl">🎩</span>
      </div>
    ),
  },
  {
    description: ["Character", "Fictional", "Imaginary"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-blue-600 to-blue-500/50">
        <span className="text-5xl">🧚</span>
      </div>
    ),
  },
  {
    description: ["Work", "Occupation"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-yellow-300/50 to-yellow-500/90">
        <span className="text-5xl">👷</span>
      </div>
    ),
  },
  {
    description: ["Hobby", "Sport"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-purple-600 to-purple-700">
        <span className="text-5xl">⚽</span>
      </div>
    ),
  },
  {
    description: ["Fauna", "Animal"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-blue-500/50 to-blue-500/25">
        <span className="text-3xl">🐙🦆🐄🐘</span>
      </div>
    ),
  },
  {
    description: ["Flora", "Plant", "Nature"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-blue-500/50 to-blue-500/25">
        <span className="text-3xl">🌱🌳🌹</span>
      </div>
    ),
  },
  {
    description: ["Literature", "Writing", "Book"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-brown-500 to-brown-500/25">
        <span className="text-5xl">📚</span>
      </div>
    ),
  },
  {
    description: ["Music", "Song"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-amber-700/20 to-amber-700/25">
        <span className="text-5xl">🎵</span>
      </div>
    ),
  },
  {
    description: ["Cinema", "Movie"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-sky-300 to-sky-400">
        <span className="text-5xl">🎥</span>
      </div>
    ),
  },
  {
    description: ["Art", "Sculpture", "Painting", "Drawing", "Cartoon"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-sky-500 to-sky-300">
        <span className="text-5xl">🎨</span>
      </div>
    ),
  },
  {
    description: ["Televison", "Program", "Show"],
    icon: (
      <div className="concept-icon bg-gradient-to-tr from-blue-500 to-blue-700">
        <span className="text-5xl">📺</span>
      </div>
    ),
  },
  {
    description: ["Title", "Brand", "Name"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-yellow-500 to-amber-500">
        <span className="text-5xl">🏷️</span>
      </div>
    ),
  },
  {
    description: ["Idea", "Intelligence", "Concept"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-indigo-600 to-indigo-700">
        <span className="text-5xl">💡</span>
      </div>
    ),
  },
  {
    description: ["Expression", "Quote", "Talking", "Words"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-cyan-700 to-cyan-900">
        <span className="text-5xl">💬</span>
      </div>
    ),
  },
  {
    description: ["Place", "Country", "World", "Flag"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-indigo-800 to-indigo-900">
        <span className="text-3xl">🌍⛳️</span>
      </div>
    ),
  },
  {
    description: ["Building", "Monument", "City"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-sky-500 to-sky-100">
        <span className="text-5xl">🏙️</span>
      </div>
    ),
  },
  {
    description: ["Date", "Event", "Day"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-sky-500 to-sky-200">
        <span className="text-5xl">📅</span>
      </div>
    ),
  },
  {
    description: ["Celebration", "Anniversary", "Holiday"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-yellow-100/50 to-yellow-200/50">
        <span className="text-5xl">🎉</span>
      </div>
    ),
  },
  {
    description: ["Seacraft", "Naval", "Swimming"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-blue-700 to-sky-600">
        <span className="text-5xl">🚢</span>
      </div>
    ),
  },
  {
    description: ["Aircraft", "Aerial", "Flying"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-sky-500 to-sky-200">
        <span className="text-3xl">✈️🚁</span>
      </div>
    ),
  },
  {
    description: ["Ground Transportation", "Road"],
    icon: (
      <div className="concept-icon bg-gradient-to-tr from-green-700 to-black">
        <span className="text-5xl">🚗</span>
      </div>
    ),
  },
  {
    description: ["Tool", "Construction"],
    icon: (
      <div className="concept-icon bg-gradient-to-tr from-orange-500 to-yellow-100">
        <span className="text-5xl">🔨</span>
      </div>
    ),
  },
  {
    description: ["Game", "Toy"],
    icon: (
      <div className="concept-icon bg-gradient-to-tl from-orange-400 to-yellow-200">
        <span className="text-3xl">🧸🎲</span>
      </div>
    ),
  },
  {
    description: ["Clothing", "Accessory", "Costume"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-indigo-400 to-fuchsia-400">
        <span className="text-3xl">👗👔</span>
      </div>
    ),
  },
  {
    description: ["Food", "Eating", "Edible"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-orange-400 to-amber-300">
        <span className="text-3xl">🥛🍔🍜🍽️</span>
      </div>
    ),
  },
  {
    description: ["House", "Dwelling", "Room", "Domestic"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-sky-900/70 to-sky-100/60">
        <span className="text-5xl">🏠</span>
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
      <div className="concept-icon bg-gradient-to-b from-white to-pink-300">
        <span className="text-3xl">♀️👩</span>
      </div>
    ),
  },
  {
    description: ["Masculine", "Male"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-white to-blue-300">
        <span className="text-3xl">♂️🧔‍♂️</span>
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
      <div className="concept-icon bg-gradient-to-r from-red-500 to-red-700">
        <span className="text-5xl">💰</span>
      </div>
    ),
  },
  {
    description: ["Time", "Duration"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-black to-white">
        <span className="text-3xl">⏳🕰️</span>
      </div>
    ),
  },
  {
    description: ["Religion", "Myth", "Spirituality"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-white to-yellow-500">
        <span className="text-5xl">🕍</span>
      </div>
    ),
  },
  {
    description: ["Power", "Politics"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-red-900 to-red-600">
        <span className="text-5xl">👑</span>
      </div>
    ),
  },
  {
    description: ["Science", "Math"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-slate-900 to-brown-600">
        <span className="text-3xl">🧪🧮</span>
      </div>
    ),
  },
  {
    description: ["Medical", "Medicine", "Health"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-green-950 to-green-950">
        <span className="text-3xl">💉🏥</span>
      </div>
    ),
  },
  {
    description: ["Head", "Face", "Neck"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-blue-300 to-white">
        <span className="text-5xl">👤</span>
      </div>
    ),
  },
  {
    description: ["Arm", "Hand", "Finger"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-blue-300 to-white">
        <span className="text-5xl">💪</span>
      </div>
    ),
  },
  {
    description: ["Torso", "Stomach", "Body"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-blue-300 to-white">
        <span className="text-xl align-middle tracking-[-0.3em]">
          →<span className="text-5xl align-middle">🧍</span>←
        </span>
      </div>
    ),
  },
  {
    description: ["Leg", "Foot"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-blue-300 to-white">
        <span className="text-5xl">🦵</span>
      </div>
    ),
  },
  {
    description: ["Ear", "Hear", "Sound"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-blue-300 to-white">
        <span className="text-5xl">👂</span>
      </div>
    ),
  },
  {
    description: ["Nose", "Scent", "Smelling"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-blue-300 to-white">
        <span className="text-5xl">👃</span>
      </div>
    ),
  },
  {
    description: ["Eye", "Sight"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-blue-300 to-white">
        <span className="text-5xl">👁️</span>
      </div>
    ),
  },
  {
    description: ["Mouth", "Taste"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-blue-300 to-white">
        <span className="text-5xl">👄</span>
      </div>
    ),
  },
];

export const concepts3: ConceptData[] = [
  {
    description: ["Cold", "Snow / Rain", "Cloud"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-slate-100 to-slate-500">
        <span className="text-5xl">🌧️</span>
      </div>
    ),
  },
  {
    description: ["Hot", "Day / Light", "Sun"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-sky-500 to-sky-100">
        <span className="text-5xl">🌞</span>
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
        <span className="text-5xl">🌩️</span>
      </div>
    ),
  },
  {
    description: ["Fire", "Burn", "Cooking"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-red-500 to-orange-400">
        <span className="text-5xl">🔥</span>
      </div>
    ),
  },
  {
    description: ["Water", "Liquid", "Aquatic"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-blue-500 to-cyan-500">
        <span className="text-5xl">💧</span>
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
        <span className="text-5xl">🪵</span>
      </div>
    ),
  },
  {
    description: ["Metal"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600">
        <span className="text-5xl">🔩</span>
      </div>
    ),
  },
  {
    description: ["Fabric"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600">
        <span className="text-5xl">🧶</span>
      </div>
    ),
  },
  {
    description: ["Rubber", "Plastic"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600">
        <span className="text-5xl">♳</span>
      </div>
    ),
  },
  {
    description: ["Paper", "Sheet"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600">
        <span className="text-5xl">📄</span>
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
        <span className="text-5xl relative">{"/"}</span>
      </div>
    ),
  },
  {
    description: ["Arc / Curve", "Rounded", "Flexible"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <PaperGrid />
        <span className="text-5xl relative">⌒</span>
      </div>
    ),
  },
  {
    description: ["Cross", "Crossing", "Addition"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <PaperGrid />
        <span className="text-5xl relative">+</span>
      </div>
    ),
  },
  {
    description: ["Angles", "Sharp", "Jagged"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <PaperGrid />
        <span className="text-5xl relative">📈</span>
      </div>
    ),
  },
  {
    description: ["Spiral", "Drunkenness", "Coil"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <PaperGrid />
        <span className="text-5xl relative">🌀</span>
      </div>
    ),
  },
  {
    description: ["Wavy", "Ripple", "Hair"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <PaperGrid />
        <span className="text-5xl relative">〰</span>
      </div>
    ),
  },
  {
    description: ["Circle", "Ring"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <PaperGrid />
        <span className="text-5xl relative">⭕</span>
      </div>
    ),
  },
  {
    description: ["Round"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <PaperGrid />
        <span className="text-5xl relative">🔵</span>
      </div>
    ),
  },
  {
    description: ["Triangle"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <PaperGrid />
        <span className="text-5xl relative">🔺</span>
      </div>
    ),
  },
  {
    description: ["Star"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <PaperGrid />
        <span className="text-5xl relative">⭐</span>
      </div>
    ),
  },
  {
    description: ["Square", "Rectangle"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <PaperGrid />
        <span className="text-5xl relative">⬛</span>
      </div>
    ),
  },
  {
    description: ["Flat"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <PaperGrid />
        <span className="text-5xl relative">🔲</span>
      </div>
    ),
  },
  {
    description: ["Cube"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ThreeDGrid />
        <span className="text-5xl relative">🔳</span>
      </div>
    ),
  },
  {
    description: ["Sphere"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ThreeDGrid />
        <span className="text-5xl relative">🟠</span>
      </div>
    ),
  },
  {
    description: ["Pyramid"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ThreeDGrid />
        <span className="text-5xl relative">🔺</span>
      </div>
    ),
  },
  {
    description: ["Cylinder"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ThreeDGrid />
        <span className="text-5xl relative">🟡</span>
      </div>
    ),
  },
  {
    description: ["Cone"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ThreeDGrid />
        <span className="text-5xl relative">🔺</span>
      </div>
    ),
  },
  {
    description: ["Hollow", "Hole", "Pierced"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ThreeDGrid />
        <span className="text-5xl relative">🕳️</span>
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
        <span className="relative w-[35%] h-[75%] shrink-0 bg-yellow-400 border border-amber-500" />
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
          <span className="relative w-[45%] h-[20%] shrink-0 bg-yellow-400 border border-amber-500" />
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
          <span className="relative w-[100%] h-[50%] shrink-0 bg-yellow-400 border border-amber-500" />
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
          <span className="relative w-[20%] h-[50%] shrink-0 bg-yellow-400 border border-amber-500" />
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
          <span className="text-6xl">↥</span>
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
          <span className="text-6xl">↥</span>
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
          <span className="text-6xl">↥</span>
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
          <span className="text-6xl">↥</span>
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
        <span className="relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-red-500 border-red-700" />
      </div>
    ),
  },
  {
    description: ["Orange"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ColorBackground />
        <span className="relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-orange-500 border-orange-700" />
      </div>
    ),
  },
  {
    description: ["Yellow"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ColorBackground />
        <span className="relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-yellow-300 border-yellow-500" />
      </div>
    ),
  },
  {
    description: ["Green"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ColorBackground />
        <span className="relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-green-500 border-green-700" />
      </div>
    ),
  },
  {
    description: ["Blue"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ColorBackground />
        <span className="relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-blue-500 border-blue-700" />
      </div>
    ),
  },
  {
    description: ["Purple"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ColorBackground />
        <span className="relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-purple-700 border-purple-900" />
      </div>
    ),
  },
  {
    description: ["Pink"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ColorBackground />
        <span className="relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-pink-400 border-pink-600" />
      </div>
    ),
  },
  {
    description: ["Brown"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ColorBackground />
        <span className="relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-brown-600 border-brown-800" />
      </div>
    ),
  },
  {
    description: ["Black"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ColorBackground />
        <span className="relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-black border-black" />
      </div>
    ),
  },
  {
    description: ["Gray"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ColorBackground />
        <span className="relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-gray-400 border-gray-600" />
      </div>
    ),
  },
  {
    description: ["White"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ColorBackground />
        <span className="relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-white border-gray-300" />
      </div>
    ),
  },
  {
    description: ["Transparent", "Invisible", "Glass"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-slate-100 to-slate-100 relative">
        <ColorBackground />
        <span className="relative text-5xl w-[70%] h-[70%] border-2 rounded-lg bg-gradient-to-br from-white/90 to-white/10 border-white/90" />
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
