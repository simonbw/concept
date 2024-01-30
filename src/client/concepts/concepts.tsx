import React, { ReactNode } from "react";
import { range } from "../../common/utils/arrayUtils";
import { AirplaneIcon } from "../components/icons/AirplaneIcon";
import { BabyIcon } from "../components/icons/BabyIcon";
import { BoatIcon } from "../components/icons/BoatIcon";
import { BooksIcon } from "../components/icons/BooksIcon";
import { BowlingIcon } from "../components/icons/BowlingIcon";
import { BoxIcon } from "../components/icons/Box";
import { BurgerIcon } from "../components/icons/BurgerIcon";
import { CarIcon } from "../components/icons/CarIcon";
import { CityIcon } from "../components/icons/CityIcon";
import { ClockIcon } from "../components/icons/ClockIcon";
import { ConstructionWorkerIcon } from "../components/icons/ConstructionWorker";
import { CrownIcon } from "../components/icons/CrownIcon";
import { DirtPileIcon } from "../components/icons/DirtIcon";
import { DoctorIcon } from "../components/icons/DoctorIcon";
import { FabricIcon } from "../components/icons/FabricIcon";
import { FireIcon } from "../components/icons/FireIcon";
import { GrandmaIcon } from "../components/icons/GrandmaIcon";
import { GrandpaIcon } from "../components/icons/GrandpaIcon";
import { GroupIcon } from "../components/icons/GroupIcon";
import { HappyIcon } from "../components/icons/HappyIcon";
import { HelicopterIcon } from "../components/icons/HelicopterIcon";
import { HistoricalIcon } from "../components/icons/HistoricalIcon";
import { LionIcon } from "../components/icons/LionIcon";
import { LocationIcon } from "../components/icons/LocationIcon";
import { ManIcon } from "../components/icons/ManIcon";
import { MermaidIcon } from "../components/icons/MermaidIcon";
import { MonkeyIcon } from "../components/icons/MonkeyIcon";
import { MovieIcon } from "../components/icons/MovieIcon";
import { MusicIcon2 } from "../components/icons/MusicIcon2";
import { NightSkyIcon } from "../components/icons/NightSkyIcon";
import { PigIcon } from "../components/icons/PigIcon";
import { PlantIcon1 } from "../components/icons/PlantIcon1";
import { PlantIcon2 } from "../components/icons/PlantIcon2";
import { PlantIcon3 } from "../components/icons/PlantIcon3";
import { PlantIcon4 } from "../components/icons/PlantIcon4";
import { RainIcon } from "../components/icons/RainIcon";
import { RoadIcon } from "../components/icons/RoadIcon";
import { SadIcon } from "../components/icons/SadIcon";
import { ShipIcon } from "../components/icons/ShipIcon";
import { SkullIcon } from "../components/icons/SkullIcon";
import { SoccerIcon } from "../components/icons/SoccerIcon";
import { SpeechIcon } from "../components/icons/SpeechIcon";
import { SquidIcon } from "../components/icons/SquidIcon";
import { SteelIcon } from "../components/icons/SteelIcon";
import { StoneIcon } from "../components/icons/Stone";
import { StormIcon } from "../components/icons/StormIcon";
import { SunIcon } from "../components/icons/SunIcon";
import { ToolIcon } from "../components/icons/ToolIcon";
import { TvIcon } from "../components/icons/TvIcon";
import { WaterIcon } from "../components/icons/WaterIcon";
import { WomanIcon } from "../components/icons/WomanIcon";
import { WoodIcon } from "../components/icons/WoodIcon";
import { colorConcepts } from "./colorConcepts";
import { geometryConcepts } from "./geometryConcepts";
import { ScissorsIcon } from "../components/icons/ScissorsIcon";

export interface ConceptData {
  description: string[];
  icon: ReactNode;
}

export const concepts1: ConceptData[] = [
  {
    description: ["Object", "Box"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-blue-500 to-transparent">
        <BoxIcon className="drop-shadow-sm" />
      </div>
    ),
  },
  {
    description: ["Human", "Society", "Group"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-orange-400/50 to-orange-300/40">
        <GroupIcon className="text-rose-800/80 drop-shadow-sm" />
      </div>
    ),
  },
  {
    description: ["Human", "Real", "Historical"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-orange-600/80 to-orange-600/90">
        <HistoricalIcon className="drop-shadow-sm m-1" />
      </div>
    ),
  },
  {
    description: ["Character", "Fictional", "Imaginary"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-blue-700 to-blue-500">
        <MermaidIcon className="drop-shadow-sm m-0.5" />
      </div>
    ),
  },
  {
    description: ["Work", "Occupation"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-yellow-300/50 to-yellow-500/90">
        <ConstructionWorkerIcon className="absolute w-11 top-2 -left-1 drop-shadow-sm -rotate-6" />
        <DoctorIcon className="absolute w-11 bottom-2 -right-1 drop-shadow-sm rotate-6" />
      </div>
    ),
  },
  {
    description: ["Hobby", "Sport"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-purple-600 to-purple-700">
        <BowlingIcon className="absolute w-11 -left-0.5 top-1 drop-shadow-sm -rotate-6" />
        <SoccerIcon className="absolute w-9 right-0.5 bottom-0.5 drop-shadow-sm" />
        {/* <span className="text-5xl drop-shadow-md">⚽</span> */}
      </div>
    ),
  },
  {
    description: ["Fauna", "Animal"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-blue-500/80 to-blue-500/30">
        <span className="grid grid-cols-2 grid-rows-2 w-full h-full items-center justify-center">
          <SquidIcon className="relative drop-shadow-sm-strong -m-3 left-0" />
          <MonkeyIcon className="relative drop-shadow-sm-strong -m-2.5 left-2 top-0.5 -rotate-6" />
          <PigIcon className="relative drop-shadow-sm-strong -m-2 rotate-6" />
          <LionIcon className="relative drop-shadow-sm-strong -m-2 -rotate-6 top-1 left-1" />
        </span>
      </div>
    ),
  },
  {
    description: ["Flora", "Plant", "Nature"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-green-500/50 to-green-500/25">
        <span className="grid grid-cols-2 grid-rows-2 w-full h-full items-center justify-center">
          <PlantIcon1 className="relative drop-shadow-sm-strong -m-1 left-0" />
          <PlantIcon2 className="relative drop-shadow-sm-strong -m-1 left-0" />
          <PlantIcon3 className="relative drop-shadow-sm-strong -m-3 -left-1 top-1 rotate-6" />
          <PlantIcon4 className="relative drop-shadow-sm-strong -m-2.5 left-0 top-1 -rotate-12" />
        </span>
        {/* <span className="text-3xl">
          <span className="drop-shadow-md">🌱</span>
          <span className="drop-shadow-md">🌳</span>
          <span className="drop-shadow-md">🌹</span>
        </span> */}
      </div>
    ),
  },
  {
    description: ["Literature", "Writing", "Book"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-brown-500 to-brown-500/25">
        <BooksIcon className="drop-shadow-sm m-1" />
      </div>
    ),
  },
  {
    description: ["Music", "Song"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-amber-700/20 to-amber-700/40">
        <MusicIcon2 className="absolute drop-shadow-sm w-20 -rotate-6 -top-2.5" />
        {/* <MusicIcon className="absolute w-12 bottom-0 right-0 drop-shadow-[0_0px_2px_rgba(255,255,255,0.99)]" /> */}
      </div>
    ),
  },
  {
    description: ["Cinema", "Movie"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-sky-300 to-sky-400">
        <MovieIcon className="drop-shadow-sm-strong m-1 -scale-x-100" />
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
      <div className="concept-icon bg-gradient-to-tr from-sky-600 to-indigo-800">
        <TvIcon className="drop-shadow-sm m-1" />
        {/* <span className="text-5xl drop-shadow-md">📺</span> */}
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
        <SpeechIcon className="drop-shadow-md m-1" />
      </div>
    ),
  },
  {
    description: ["Place", "Country", "World", "Flag"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-indigo-800 to-indigo-900">
        <LocationIcon className="drop-shadow-sm m-1" />
        {/* <span className="text-3xl drop-shadow-md flex items-center justify-center">
          <span>⛳️</span>
          <span>🌍</span>
        </span> */}
      </div>
    ),
  },
  {
    description: ["Building", "Monument", "City"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-sky-500 to-sky-100 p-0">
        <CityIcon className="m-[-2px]" />
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
      <div className="concept-icon">
        <div className="absolute inset-x-0 top-0 bottom-[50%] bg-gradient-to-b from-sky-300 to-sky-100" />
        <div className="absolute inset-x-0 bottom-0 top-[50%] bg-gradient-to-b from-blue-400 to-blue-800" />

        <ShipIcon className="absolute drop-shadow-sm w-12 left-0 bottom-4" />
        <BoatIcon className="absolute drop-shadow-sm-strong w-9 right-0.5 bottom-0.5 -scale-x-100" />
      </div>
    ),
  },
  {
    description: ["Aircraft", "Aerial", "Flying"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-sky-500 to-sky-200">
        {/* <span className="absolute inset-0 text-8xl text-white/35 flex items-center justify-center">
          ✈️
        </span> */}
        <AirplaneIcon className="absolute opacity-35 -inset-2" />
        <HelicopterIcon className="drop-shadow-md -mt-4" />
      </div>
    ),
  },
  {
    description: ["Ground Transportation", "Road"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-white to-sky-200">
        <RoadIcon className="absolute inset-0 m-[-2px]" />
        <CarIcon className="relative w-8 top-2 drop-shadow-sm" />
      </div>
    ),
  },
  {
    description: ["Tool", "Construction"],
    icon: (
      <div className="concept-icon bg-gradient-to-tr from-yellow-500 to-yellow-100">
        <svg className="absolute inset-0" viewBox="0 0 100 100">
          {range(0, 8).map((i) => (
            <line
              key={i}
              className="stroke-black/90 stroke-[10]"
              x1={0}
              y1={i * 32}
              x2={i * 22}
              y2={0}
              strokeLinecap="square"
            />
          ))}
        </svg>
        <ToolIcon className="drop-shadow-sm-strong m-1" />
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
          <span className="text-3xl drop-shadow-md">
            <BurgerIcon className="w-6 drop-shadow-sm" />
          </span>
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
        <BabyIcon className="drop-shadow-sm m-2" />
        {/* <span className="text-3xl drop-shadow-sm">👶🧒</span> */}
      </div>
    ),
  },
  {
    description: ["Adult", "Elderly", "Old", "Past"],
    icon: (
      <div className="concept-icon bg-gradient-to-r from-gray-200 to-gray-400">
        <GrandpaIcon className="absolute w-10 -right-1 drop-shadow-sm rotate-6" />
        <GrandmaIcon className="absolute w-10 -left-1 drop-shadow-sm -rotate-6" />
        {/* <span className="text-3xl drop-shadow-sm">👴👵</span> */}
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
        <WomanIcon className="absolute bottom-1 right-1 w-10 drop-shadow-sm-strong" />
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
        <ManIcon className="absolute bottom-1 right-1 w-10 drop-shadow-sm-strong" />
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
        <SkullIcon className="drop-shadow-sm-strong -m-2" />
      </div>
    ),
  },
  {
    description: ["Happy", "Positive"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-sky-500 to-white">
        <HappyIcon className="drop-shadow-sm" />
      </div>
    ),
  },
  {
    description: ["Sad", "Negative"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-sky-600 to-cyan-900">
        <SadIcon className="drop-shadow-sm" />
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
      <div className="concept-icon bg-gradient-to-r from-slate-900 to-slate-800">
        {/* <span className="relative top-2.5 text-[7.5rem] flex items-center justify-center">
          🕰️
        </span> */}
        <ClockIcon className="relative drop-shadow-sm -m-6 top-1" />
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
        <CrownIcon className="drop-shadow-sm m-2" />
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
      <div className="concept-icon bg-gradient-to-b from-slate-300 to-slate-500">
        <RainIcon className="drop-shadow-sm m-1" />
      </div>
    ),
  },
  {
    description: ["Hot", "Day / Light", "Sun"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-sky-500 to-sky-100">
        <SunIcon className="m-1 drop-shadow-[0px_0px_1px_rgba(128,96,0,0.9)]" />
      </div>
    ),
  },
  {
    description: ["Night / Evening", "Space", "Moon / Stars"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-purple-900 to-black">
        <NightSkyIcon className="-m-4" />
      </div>
    ),
  },
  {
    description: ["Lightning / Storm", "Electricity", "Anger"],
    icon: (
      <div className="concept-icon bg-gradient-to-b from-gray-500 to-purple-800">
        <StormIcon className="drop-shadow-sm-strong m-0.5" />
      </div>
    ),
  },
  {
    description: ["Fire", "Burn", "Cooking"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-red-500 to-orange-400">
        <FireIcon className="drop-shadow-fire m-1" />
        {/* <span className="text-5xl drop-shadow-[0_0_5px_rgba(255,210,100,0.99)]">
          🔥
        </span> */}
      </div>
    ),
  },
  {
    description: ["Water", "Liquid", "Aquatic"],
    icon: (
      <div className="concept-icon bg-gradient-to-t from-blue-500 to-cyan-500">
        <WaterIcon className="drop-shadow-[0_3px_6px_rgba(0,40,200,0.5)] m-1.5" />
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
        <DirtPileIcon className="drop-shadow-sm m-0.5" />
      </div>
    ),
  },
  {
    description: ["Stone", "Mineral", "Hard"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600">
        <StoneIcon className="drop-shadow-sm m-1" />
      </div>
    ),
  },
  {
    description: ["Wood"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600">
        <WoodIcon className="drop-shadow-sm m-1" />
      </div>
    ),
  },
  {
    description: ["Metal"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600">
        {/* <svg className="drop-shadow-sm" viewBox="0 0 100 100">
          <defs>
            <linearGradient
              className={classNames(
                "[--gradientLightColor:theme(colors.gray.200)]",
                "[--gradientMediumColor:theme(colors.gray.300)]",
                "[--gradientDarkColor:theme(colors.gray.400)]"
              )}
              id="steelGradientTop"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="var(--gradientLightColor)" />
              <stop offset="40%" stopColor="var(--gradientDarkColor)" />
              <stop offset="70%" stopColor="var(--gradientMediumColor)" />
              <stop offset="100%" stopColor="var(--gradientDarkColor)" />
            </linearGradient>
            <linearGradient
              className={classNames(
                "[--gradientLightColor:theme(colors.gray.400)]",
                "[--gradientDarkColor:theme(colors.gray.500)]",
                "[--gradientDarklightColor:theme(colors.gray.600)]"
              )}
              id="steelGradientMiddle"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="var(--gradientLightColor)" />
              <stop offset="40%" stopColor="var(--gradientDarkColor)" />
              <stop offset="60%" stopColor="var(--gradientDarkColor)" />
              <stop offset="100%" stopColor="var(--gradientLightColor)" />
            </linearGradient>
            <linearGradient
              className={classNames(
                "[--gradientLightColor:theme(colors.gray.400)]",
                "[--gradientDarkColor:theme(colors.gray.500)]",
                "[--gradientDarklightColor:theme(colors.gray.600)]"
              )}
              id="steelGradientBottom"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="var(--gradientLightColor)" />
              <stop offset="40%" stopColor="var(--gradientDarkColor)" />
              <stop offset="60%" stopColor="var(--gradientDarkColor)" />
              <stop offset="100%" stopColor="var(--gradientLightColor)" />
            </linearGradient>
          </defs>
          <polygon
            points="7,50 33,50 93,75 67,75"
            className="stroke-gray-600"
            fill="url(#steelGradientBottom)"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polygon
            points="20,30 80,55 80,75 20,50"
            className="stroke-gray-600"
            fill="url(#steelGradientMiddle)"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polygon
            points="7,30 33,30 93,55 67,55"
            className="stroke-gray-600"
            fill="url(#steelGradientTop)"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg> */}
        <SteelIcon className="drop-shadow-sm m-1" />
        {/* <span className="text-5xl drop-shadow-sm">🔩</span> */}
      </div>
    ),
  },
  {
    description: ["Fabric"],
    icon: (
      <div className="concept-icon bg-gradient-to-br from-slate-100 to-green-600">
        <FabricIcon className="drop-shadow-sm m-2" />
        {/* <span className="text-5xl drop-shadow-sm">🧶</span> */}
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
        <span className="absolute h-full w-0 border-x border-dashed" />
        {/* <span className="absolute text-5xl drop-shadow-sm">✂️</span> */}
        <ScissorsIcon className="absolute drop-shadow-sm m-2" />
      </div>
    ),
  },
  {
    description: ["Fragment", "Multitude", "Cluster"],
    icon: (
      <div className="concept-icon bg-gradient-to-bl from-sky-500 to-sky-300">
        <svg className="absolute inset-0 drop-shadow-sm" viewBox="0 0 100 100">
          {range(0, 7).map((i) =>
            range(0, 7).map(
              (j) =>
                i - j <= 0 && (
                  <rect
                    key={`${i}-${j}`}
                    rx={4}
                    ry={4}
                    x={i * 16 - 4}
                    y={j * 16}
                    width={15}
                    height={15}
                    strokeWidth={2}
                    className="fill-white stroke-red-500"
                  />
                )
            )
          )}
          <rect
            rx={4}
            ry={4}
            x={60}
            y={8}
            width={18}
            height={18}
            strokeWidth={2}
            className="fill-white stroke-red-500"
          />
          <rect
            rx={4}
            ry={4}
            x={80}
            y={34}
            width={12}
            height={12}
            strokeWidth={2}
            className="fill-white stroke-red-500"
          />
        </svg>
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
            <span key={i} className="border border-gray-600" />
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
