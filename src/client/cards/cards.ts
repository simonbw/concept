import { findDuplicates, range } from "../../common/utils/arrayUtils";
import { seededShuffle } from "../../common/utils/randUtils";
import { Tuple } from "../../common/utils/typeUtils";
import { easyClues } from "./easyClues";
import { hardClues } from "./hardClues";
import { mediaClues } from "./mediaClues";
import { mediumClues } from "./mediumClues";
import { sayingClues } from "./sayingClues";

export type CardData = Readonly<Tuple<string, 9>>;

export const allCards: CardData[] = [
  [
    "Kellogg's",
    "Ladder",
    "The Mummy",
    "Flush",
    "Wheel of Fortune",
    "Robin Hood",
    "Blind as a Bat",
    "Popeye and Olive Oyl",
    "Pedal to the Metal",
  ],

  ...makeCards(),
];

function makeCards(): CardData[] {
  const seed = 1;
  const easy = seededShuffle([...easyClues], seed);
  const medium = seededShuffle([...mediumClues, ...mediaClues], seed);
  const hard = seededShuffle([...hardClues, ...sayingClues], seed);

  const f = Math.floor;
  const easy1 = easy.slice(0, f(easy.length / 3));
  const easy2 = easy.slice(f(easy.length / 3), f((easy.length / 3) * 2));
  const easy3 = easy.slice(f((easy.length / 3) * 2));
  const medium1 = medium.slice(0, f(medium.length / 3));
  const medium2 = medium.slice(f(medium.length / 3), f(medium.length / 3) * 2);
  const medium3 = medium.slice(f(medium.length / 3) * 2);
  const hard1 = hard.slice(0, f(hard.length / 3));
  const hard2 = hard.slice(f(hard.length / 3), f(hard.length / 3) * 2);
  const hard3 = hard.slice(f(hard.length / 3) * 2);

  const numCards = Math.min(
    easy1.length,
    easy2.length,
    easy3.length,
    medium1.length,
    medium2.length,
    medium3.length,
    hard1.length,
    hard2.length,
    hard3.length
  );

  console.log("Making cards:", {
    numCards,
    easyClues: easy.length,
    mediumClues: medium.length,
    hardClues: hard.length,

    easy1: easy1.length,
    easy2: easy2.length,
    easy3: easy3.length,
    medium1: medium1.length,
    medium2: medium2.length,
    medium3: medium3.length,
    hard1: hard1.length,
    hard2: hard2.length,
    hard3: hard3.length,
  });
  console.log({
    duplicates: findDuplicates(
      [...easy, ...medium, ...hard].map((s) => s.toLocaleLowerCase())
    ).sort(),
  });

  return range(0, numCards - 1).map(
    (i) =>
      [
        easy1[i],
        easy2[i],
        easy3[i],
        medium1[i],
        medium2[i],
        medium3[i],
        hard1[i],
        hard2[i],
        hard3[i],
      ] satisfies CardData
  );
}
