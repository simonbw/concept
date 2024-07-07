import React, { useState } from "react";
import { classNames } from "../../utils/classNames";
import { GamePieceIcon } from "../GamePieceIcon";
import { ModalBackground } from "../ModalBackground";
import {
  PieceColor,
  pieceColorSchema,
} from "../../../common/models/GameStateSchema";
import { colorConcepts } from "../../concepts/colorConcepts";
import { Cycler } from "../Cycler";

export const HowToModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="settings-button" onClick={() => setOpen(true)}>
        ?
      </button>

      {open && (
        <ModalBackground onClose={() => setOpen(false)}>
          <div
            className={classNames(
              "bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-100",
              "rounded-xl drop-shadow-lg max-w-lg p-6 mx-2",
              "overflow-y-auto max-h-[80vh]"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-2">How To Play</h2>
            <p>
              A round begins with one person drawing a card and choosing a
              concept listed on it. Their job is then to convey this concept to
              the rest of the players. They can only communicate by moving the
              game pieces around the board. The round is over when someone
              guesses the concept correctly.
            </p>

            <h3 className="font-bold mt-6 mb-2">The Pieces</h3>

            <div className="grid [grid-template-columns:auto_1fr] gap-2 ">
              <span className="flex items-center justify-center">
                <GamePieceIcon color="green" size="large" />
              </span>
              <span className="flex items-center justify-start">
                Represents the main concept.
              </span>
              <span className="flex items-center justify-center">
                <Cycler
                  items={pieceColorSchema.options.filter(
                    (color) => color !== "green"
                  )}
                  duration={1500}
                >
                  {(color) => (
                    <GamePieceIcon
                      color={color}
                      size="large"
                      className="duration-700"
                    />
                  )}
                </Cycler>
              </span>
              <span className="flex items-center justify-start">
                Represents a related concept.
              </span>
              <span className="text-center">
                <span className="p-1 inline-block">
                  <GamePieceIcon color="green" size="small" />
                </span>
                <span className="p-1 inline-block">
                  <GamePieceIcon color="red" size="small" />
                </span>
                <span className="p-1 inline-block">
                  <GamePieceIcon color="blue" size="small" />
                </span>
                <br />
                <span className="p-1 inline-block">
                  <GamePieceIcon color="yellow" size="small" />
                </span>
                <span className="p-1 inline-block">
                  <GamePieceIcon color="black" size="small" />
                </span>
              </span>
              <span className="flex items-center justify-start">
                Modifies the concept of the same color.
              </span>
            </div>

            <h3 className="font-bold mt-6 mb-2">Private Games</h3>
            <p>
              You can create a private game by adding a unique title to the URL
              and sharing it with your friends. For example{" "}
              <a className="underline text-blue-500">
                {window.location.origin}/your-game-here
              </a>
              .
            </p>

            <div className="flex justify-end mt-6">
              <button onClick={() => setOpen(false)}>Close</button>
            </div>
          </div>
        </ModalBackground>
      )}
    </>
  );
};
