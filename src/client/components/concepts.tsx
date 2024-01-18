import React, { ReactNode } from "react";

export interface ConceptData {
  description: string[];
  icon: ReactNode;
}

export const concepts1: ConceptData[] = [
  {
    description: ["Object", "Box"],
    icon: <span className="text-5xl">📦</span>,
  },
  {
    description: ["Human", "Society", "Group"],
    icon: <span className="text-3xl">👥👥</span>,
  },
  {
    description: ["Human", "Real", "Historical"],
    icon: <span className="text-5xl">🎩</span>,
  },
  {
    description: ["Character", "Fictional", "Imaginary"],
    icon: <span className="text-5xl">🧚</span>,
  },
  {
    description: ["Work", "Occupation"],
    icon: <span className="text-5xl">👷</span>,
  },
  {
    description: ["Hobby", "Sport"],
    icon: <span className="text-5xl">⚽</span>,
  },
  {
    description: ["Fauna", "Animal"],
    icon: <span className="text-3xl">🐙🦆🐄🐘</span>,
  },
  {
    description: ["Flora", "Plant", "Nature"],
    icon: <span className="text-3xl">🌱🌳🌹</span>,
  },
  {
    description: ["Literature", "Writing", "Book"],
    icon: <span className="text-5xl">📚</span>,
  },
  {
    description: ["Music", "Song"],
    icon: <span className="text-5xl">🎵</span>,
  },
  {
    description: ["Cinema", "Movie"],
    icon: <span className="text-5xl">🎥</span>,
  },
  {
    description: ["Art", "Sculpture", "Painting", "Drawing", "Cartoon"],
    icon: <span className="text-5xl">🎨</span>,
  },
  {
    description: ["Televison", "Program", "Show"],
    icon: <span className="text-5xl">📺</span>,
  },
  {
    description: ["Title", "Brand", "Name"],
    icon: <span className="text-5xl">🏷️</span>,
  },
  {
    description: ["Idea", "Intelligence", "Concept"],
    icon: <span className="text-5xl">💡</span>,
  },
  {
    description: ["Expression", "Quote", "Talking", "Words"],
    icon: <span className="text-5xl">💬</span>,
  },
  {
    description: ["Place", "Country", "World", "Flag"],
    icon: <span className="text-3xl">🌍⛳️</span>,
  },
  {
    description: ["Building", "Monument", "City"],
    icon: <span className="text-5xl">🏙️</span>,
  },
  {
    description: ["Date", "Event", "Day"],
    icon: <span className="text-5xl">📅</span>,
  },
  {
    description: ["Celebration", "Anniversary", "Holiday"],
    icon: <span className="text-5xl">🎉</span>,
  },
  {
    description: ["Seacraft", "Naval", "Swimming"],
    icon: <span className="text-5xl">🚢</span>,
  },
  {
    description: ["Aircraft", "Aerial", "Flying"],
    icon: <span className="text-3xl">✈️🚁</span>,
  },
  {
    description: ["Ground Transportation", "Road"],
    icon: <span className="text-5xl">🚗</span>,
  },
  {
    description: ["Tool", "Construction"],
    icon: <span className="text-5xl">🔨</span>,
  },
  {
    description: ["Game", "Toy"],
    icon: <span className="text-5xl">🎲🧸</span>,
  },
  {
    description: ["Clothing", "Accessory", "Costume"],
    icon: <span className="text-3xl">👗👔</span>,
  },
  {
    description: ["Food", "Eating", "Edible"],
    icon: <span className="text-3xl">🥛🍔🍜🍽️</span>,
  },
  {
    description: ["House", "Dwelling", "Room", "Domestic"],
    icon: <span className="text-5xl">🏠</span>,
  },
];

export const concepts2: ConceptData[] = [
  {
    description: ["Baby", "Child", "Young", "New"],
    icon: <span className="text-3xl">👶🧒</span>,
  },
  {
    description: ["Adult", "Elderly", "Old", "Past"],
    icon: <span className="text-3xl">👴👵</span>,
  },
  {
    description: ["Feminine", "Female"],
    icon: <span className="text-3xl">♀️👩</span>,
  },
  {
    description: ["Masculine", "Male"],
    icon: <span className="text-3xl">♂️🧔‍♂️</span>,
  },
  {
    description: ["Slow", "Slow Motion"],
    icon: <span className="text-5xl">🐢</span>,
  },
  {
    description: ["Fast", "Race"],
    icon: <span className="text-5xl">🐇</span>,
  },
  {
    description: ["Defense", "Protection", "Wall"],
    icon: <span className="text-5xl">🛡️</span>,
  },
  {
    description: ["Attack", "Conflict", "Combat", "Weapon"],
    icon: <span className="text-5xl">⚔️</span>,
  },
  {
    description: ["Life", "Heart", "Love"],
    icon: <span className="text-5xl">❤️</span>,
  },
  {
    description: ["Death", "Bad", "Illness"],
    icon: <span className="text-5xl">💀</span>,
  },
  {
    description: ["Happy", "Positive"],
    icon: <span className="text-5xl">😀</span>,
  },
  {
    description: ["Sad", "Negative"],
    icon: <span className="text-5xl">😥</span>,
  },
  {
    description: ["Electronic", "Computing"],
    icon: <span className="text-5xl">💻</span>,
  },
  {
    description: ["Mechanical", "Industrial"],
    icon: <span className="text-3xl">⚙️🏭</span>,
  },
  {
    description: ["Money", "Rich", "Expensive"],
    icon: <span className="text-5xl">💰</span>,
  },
  {
    description: ["Time", "Duration"],
    icon: <span className="text-3xl">⏳🕰️</span>,
  },
  {
    description: ["Religion", "Myth", "Spirituality"],
    icon: <span className="text-5xl">🕍</span>,
  },
  {
    description: ["Power", "Politics"],
    icon: <span className="text-5xl">👑</span>,
  },
  {
    description: ["Science", "Math"],
    icon: <span className="text-3xl">🧪🧮</span>,
  },
  {
    description: ["Medical", "Medicine", "Health"],
    icon: <span className="text-3xl">💉🏥</span>,
  },
  {
    description: ["Head", "Face", "Neck"],
    icon: <span className="text-5xl">👤</span>,
  },
  {
    description: ["Arm", "Hand", "Finger"],
    icon: <span className="text-5xl">💪</span>,
  },
  {
    description: ["Torso", "Stomach", "Body"],
    icon: (
      <span className="text-xl align-middle tracking-[-0.3em]">
        →<span className="text-5xl align-middle">🧍</span>←
      </span>
    ),
  },
  {
    description: ["Leg", "Foot"],
    icon: <span className="text-5xl">🦵</span>,
  },
  {
    description: ["Ear", "Hear", "Sound"],
    icon: <span className="text-5xl">👂</span>,
  },
  {
    description: ["Nose", "Scent", "Smelling"],
    icon: <span className="text-5xl">👃</span>,
  },
  {
    description: ["Eye", "Sight"],
    icon: <span className="text-5xl">👁️</span>,
  },
  {
    description: ["Mouth", "Taste"],
    icon: <span className="text-5xl">👄</span>,
  },
];

export const concepts3: ConceptData[] = [
  {
    description: ["Cold", "Snow / Rain", "Cloud"],
    icon: <span className="text-5xl">🌧️</span>,
  },
  {
    description: ["Hot", "Day / Light", "Sun"],
    icon: <span className="text-5xl">🌞</span>,
  },
  {
    description: ["Night / Evening", "Space", "Moon / Stars"],
    icon: <span className="text-3xl">🌙✨</span>,
  },
  {
    description: ["Lightning / Storm", "Electricity", "Anger"],
    icon: <span className="text-5xl">🌩️</span>,
  },
  {
    description: ["Fire", "Burn", "Cooking"],
    icon: <span className="text-5xl">🔥</span>,
  },
  {
    description: ["Water", "Liquid", "Aquatic"],
    icon: <span className="text-5xl">💧</span>,
  },
  {
    description: ["Air", "Wind", "Blowing"],
    icon: <span className="text-5xl">💨</span>,
  },
  {
    description: ["Earth", "Ground"],
    icon: <span className="text-5xl">🌎</span>,
  },
  {
    description: ["Stone", "Mineral", "Hard"],
    icon: <span className="text-5xl">🪨</span>,
  },
  {
    description: ["Wood"],
    icon: <span className="text-5xl">🪵</span>,
  },
  {
    description: ["Metal"],
    icon: <span className="text-5xl">🔩</span>,
  },
  {
    description: ["Fabric"],
    icon: <span className="text-5xl">🧶</span>,
  },
  {
    description: ["Rubber", "Plastic"],
    icon: <span className="text-5xl">♳</span>,
  },
  {
    description: ["Paper", "Sheet"],
    icon: <span className="text-5xl">📄</span>,
  },
  {
    description: ["Opposite", "Reverse"],
    icon: <span className="text-5xl">🔄</span>,
  },
  {
    description: ["Cut / Break", "Separation", "Half"],
    icon: <span className="text-5xl">✂️</span>,
  },
  {
    description: ["Fragment", "Multitude", "Cluster"],
    icon: <span className="text-5xl">🔢</span>,
  },
  {
    description: ["Part", "Fragment", "Assembly"],
    icon: <span className="text-5xl">🧩</span>,
  },
  {
    description: ["Inside", "Internal"],
    icon: <span className="text-5xl">📥</span>,
  },
  {
    description: ["Grill / Wire", "Network", "Grid"],
    icon: <span className="text-3xl tracking-wide">⬜️ ⬜️ ⬜️ ⬜️</span>,
  },
  {
    description: ["Zero", "Nonce", "Nothing"],
    icon: <span className="text-5xl">0️⃣</span>,
  },
  {
    description: ["One", "Unit", "Number"],
    icon: <span className="text-5xl">1️⃣</span>,
  },
];

export const concepts4: ConceptData[] = [
  {
    description: ["Line / Straight", "Diagonal", "Stiff"],
    icon: <span className="text-5xl">{"/"}</span>,
  },
  {
    description: ["Arc / Curve", "Rounded", "Flexible"],
    icon: <span className="text-5xl">⌒</span>,
  },
  {
    description: ["Cross", "Crossing", "Addition"],
    icon: <span className="text-5xl">+</span>,
  },
  {
    description: ["Angles", "Sharp", "Jagged"],
    icon: <span className="text-5xl">📈</span>,
  },
  {
    description: ["Spiral", "Drunkenness", "Coil"],
    icon: <span className="text-5xl">🌀</span>,
  },
  {
    description: ["Wavy", "Ripple", "Hair"],
    icon: <span className="text-5xl">〰</span>,
  },
  {
    description: ["Circle", "Ring"],
    icon: <span className="text-5xl">⭕</span>,
  },
  {
    description: ["Round"],
    icon: <span className="text-5xl">🔵</span>,
  },
  {
    description: ["Triangle"],
    icon: <span className="text-5xl">🔺</span>,
  },
  {
    description: ["Star"],
    icon: <span className="text-5xl">⭐</span>,
  },
  {
    description: ["Square", "Rectangle"],
    icon: <span className="text-5xl">⬛</span>,
  },
  {
    description: ["Flat"],
    icon: <span className="text-5xl">🔲</span>,
  },
  {
    description: ["Cube"],
    icon: <span className="text-5xl">🔳</span>,
  },
  {
    description: ["Sphere"],
    icon: <span className="text-5xl">🟠</span>,
  },
  {
    description: ["Cylinder"],
    icon: <span className="text-5xl">🟡</span>,
  },
  {
    description: ["Pyramid"],
    icon: <span className="text-5xl">🔺</span>,
  },
  {
    description: ["Cone"],
    icon: <span className="text-5xl">🔺</span>,
  },
  {
    description: ["Hollow", "Hole", "Pierced"],
    icon: <span className="text-5xl">🕳️</span>,
  },
  {
    description: ["Big", "High"],
    icon: <span className="inline-block rotate-90">⇤</span>,
  },
  {
    description: ["Small", "Low"],
    icon: <span className="inline-block -rotate-90">⇤</span>,
  },
  {
    description: ["Fat", "Large", "Long"],
    icon: <span className="text-5xl">↔</span>,
  },
  {
    description: ["Thin / Fine", "Narrow", "Short"],
    icon: <span className="text-5xl">↔</span>,
  },
  {
    description: ["High", "Climb", "Above"],
    icon: <span className="text-5xl">↥</span>,
  },
  {
    description: ["Low", "Descend", "Below"],
    icon: <span className="text-5xl">↧</span>,
  },
  {
    description: ["Left", "Beginning", "Before / Past"],
    icon: <span className="text-5xl">↤</span>,
  },
  {
    description: ["Right", "End", "After / Future"],
    icon: <span className="text-5xl">↦</span>,
  },
  {
    description: ["Turn", "Around", "Cycle / Repetition"],
    icon: <span className="text-5xl">🔄</span>,
  },
  {
    description: ["Use / Action", "Do / Verb", "Button"],
    icon: <span className="text-5xl">🔘</span>,
  },
];

export const concepts5: ConceptData[] = [
  {
    description: ["Red"],
    icon: <span className="text-5xl">🟥</span>,
  },
  {
    description: ["Orange"],
    icon: <span className="text-5xl">🟧</span>,
  },
  {
    description: ["Yellow"],
    icon: <span className="text-5xl">🟨</span>,
  },
  {
    description: ["Green"],
    icon: <span className="text-5xl">🟩</span>,
  },
  {
    description: ["Blue"],
    icon: <span className="text-5xl">🟦</span>,
  },
  {
    description: ["Purple"],
    icon: <span className="text-5xl">🟪</span>,
  },
  {
    description: ["Pink"],
    icon: <span className="text-5xl">🩷</span>,
  },
  {
    description: ["Brown"],
    icon: <span className="text-5xl">🟫</span>,
  },
  {
    description: ["Black"],
    icon: <span className="text-5xl">⬛</span>,
  },
  {
    description: ["Gray"],
    icon: <span className="text-5xl">⬜️</span>,
  },
  {
    description: ["White"],
    icon: <span className="text-5xl">⬜</span>,
  },
  {
    description: ["Transparent", "Invisible", "Glass"],
    icon: <span className="text-5xl">🔳</span>,
  },
];

export const concepts: readonly ConceptData[] = [
  ...concepts1,
  ...concepts2,
  ...concepts3,
  ...concepts4,
  ...concepts5,
];
