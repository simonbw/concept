const SYMBOL_TO_VALUE = {
  Զ: 0,
  "𐊪": 1,
  "𐊷": 2,
  "𐊉": 3,
  "𐊜": 4,
  "𐊀": 5,
  "֏": 6,
  "𐋅": 7,
  "𐊬": 8,
  "𐊔": 9,
  "𐊃": 10,
} as const;

export type SymbolPuzzleSymbol = keyof typeof SYMBOL_TO_VALUE;
export type SymbolPuzzleValue = (typeof SYMBOL_TO_VALUE)[SymbolPuzzleSymbol];

export const SymbolPuzzleSymbols = Object.keys(
  SYMBOL_TO_VALUE,
) as readonly SymbolPuzzleSymbol[];

export function symbolToValue(symbol: SymbolPuzzleSymbol): SymbolPuzzleValue {
  return SYMBOL_TO_VALUE[symbol];
}

export function valueToSymbol(value: SymbolPuzzleValue): SymbolPuzzleSymbol {
  for (const [symbol, symbolValue] of Object.entries(SYMBOL_TO_VALUE)) {
    if (symbolValue === value) {
      return symbol as SymbolPuzzleSymbol;
    }
  }

  throw Error(`No symbol for value: ${value}`);
}
