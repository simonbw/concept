type CharacterCounts = Map<string, number>;

export interface HuffmanNode {
  character?: string;
  frequency: number;
  left?: HuffmanNode;
  right?: HuffmanNode;
}

type HuffmanCodes = Map<string, string>;

type HuffmanEncoder = {
  readonly encode: (text: string) => string;
  readonly alphabet: string[];
  readonly codes: HuffmanCodes;
  readonly counts: CharacterCounts;
  readonly tree: HuffmanNode;
};

export function buildHuffmanEncoder(text: string): HuffmanEncoder {
  const counts = getCharacterCounts(text);
  const alphabet = getSortedAlphabet(counts);
  const tree = buildHuffmanTree(counts);
  const codes = buildHuffmanCodes(tree);

  return {
    encode: (t) => huffmanEncode(t, codes),
    alphabet,
    codes,
    counts,
    tree,
  };
}

export function huffmanPreprocess(text: string): string {
  return text
    .toUpperCase()
    .split("")
    .filter((c) => c >= "A" && c <= "Z")
    .join("");
}

function getCharacterCounts(text: string): CharacterCounts {
  const counts: CharacterCounts = new Map();
  const characters = [...text].sort();
  for (const character of characters) {
    const count = counts.get(character) ?? 0;
    counts.set(character, count + 1);
  }
  return counts;
}

function getSortedAlphabet(counts: CharacterCounts): string[] {
  return [...counts.keys()].sort((a, b) => counts.get(b)! - counts.get(a)!);
}

function buildHuffmanTree(counts: CharacterCounts): HuffmanNode {
  const nodes: HuffmanNode[] = Array.from(counts.entries()).map(
    ([character, frequency]) => ({
      character,
      frequency,
    }),
  );

  // TODO: Build the Huffman tree
  while (nodes.length > 1) {
    nodes.sort((a, b) => a.frequency - b.frequency);

    const left = nodes.shift()!;
    const right = nodes.shift()!;

    const newNode: HuffmanNode = {
      frequency: left.frequency + right.frequency,
      left,
      right,
    };

    nodes.push(newNode);
  }

  return nodes[0];
}

function buildHuffmanCodes(tree: HuffmanNode): HuffmanCodes {
  const codes = new Map<string, string>();

  const toVisit: { node: HuffmanNode; code: string }[] = [
    { node: tree, code: "" },
  ];

  while (toVisit.length > 0) {
    const { node, code } = toVisit.pop()!;
    if (node.character) {
      codes.set(node.character, code);
    }
    if (node.left) {
      toVisit.push({ node: node.left, code: code + "0" });
    }
    if (node.right) {
      toVisit.push({ node: node.right, code: code + "1" });
    }
  }

  return codes;
}

function huffmanEncode(text: string, codes: HuffmanCodes): string {
  return [...text].map((character) => codes.get(character) ?? "?").join("");
}
