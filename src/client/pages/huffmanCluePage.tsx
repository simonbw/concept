import React, { useMemo } from "react";
import {
  buildHuffmanEncoder,
  huffmanPreprocess,
} from "../components/room/puzzles/Huffman/HuffmanNode";
import { warOfTheWorlds } from "../components/room/puzzles/Huffman/warOfTheWorlds";
import { renderPage } from "../utils/renderPage";

const HuffmanCluePage: React.FC = () => {
  const encoder = useMemo(
    () => buildHuffmanEncoder(huffmanPreprocess(warOfTheWorlds)),
    [warOfTheWorlds],
  );

  return (
    <div className="printed max-w-[6in]">
      <div className="relative mt-16">
        <p className="hyphens-auto text-justify">{warOfTheWorlds}</p>

        <div className="absolute origin-bottom-left rotate-90 left-[100%] top-0 w-64">
          <p className="font-['Comic_Sans_MS'] -rotate-2 text-left pb-2 text-indigo-700">
            This is it, the key to the tree!
          </p>
        </div>
        <p className="font-['Comic_Sans_MS'] w-fit gap-8 columns-4 -rotate-2 translate-x-24 translate-y-4 text-indigo-700">
          {[...encoder.counts.entries()].map(([character, frequency]) => (
            <div key={character}>
              {character}: {frequency}
            </div>
          ))}
        </p>
      </div>
    </div>
  );
};

renderPage(<HuffmanCluePage />);
