import { useMemo } from "react";
import { seededShuffle } from "../../common/utils/randUtils";
import { allCards } from "../cards/cards";
import { useGameState } from "./useGameState";

export function useDeck() {
  const gameState = useGameState();
  const numberCardsDrawn = gameState?.cardsDrawn ?? 0;

  const allCardsShuffled = useMemo(
    () => (gameState ? seededShuffle([...allCards], gameState.deckSeed) : []),
    [gameState?.deckSeed]
  );

  const discardPile = allCardsShuffled.slice(0, numberCardsDrawn).reverse();
  const deck = allCardsShuffled.slice(numberCardsDrawn);

  return {
    deck,
    discardPile,
  };
}
