import React from "react";
import { trpcClient } from "../../../../trpc/trpcClient";
import { RoomScreen } from "../../RoomScreen";
import { HuffmanPuzzle } from "../../puzzles/Huffman/HuffmanPuzzle";
import { warOfTheWorlds } from "../../puzzles/Huffman/warOfTheWorlds";

export const secretText = "Hello World";

export const HuffmanScreen: React.FC<{ easy?: boolean }> = ({
  easy = false,
}) => {
  return (
    <RoomScreen>
      <HuffmanPuzzle
        sourceText={warOfTheWorlds}
        secretText={"Hello World!"}
        easy={easy}
        onComplete={() =>
          trpcClient.admin.progress.mutate({
            puzzleName: "huffman",
          })
        }
      />
    </RoomScreen>
  );
};
