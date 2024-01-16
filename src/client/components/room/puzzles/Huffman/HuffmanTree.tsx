import React from "react";
import { classNames } from "../../../../utils/classNames";
import { HuffmanNode } from "./HuffmanNode";

export const HuffmanTree: React.FC<{
  node: HuffmanNode;
  alphabet?: string[];
}> = ({ node, alphabet }) => {
  function renderCharacter(char?: string) {
    if (char === undefined) {
      return <>&nbsp;</>;
    } else if (alphabet) {
      return alphabet.indexOf(char) + 1;
    } else {
      return char;
    }
  }
  return (
    <div className="huffman-node">
      <span
        className={classNames(
          "huffman-node-character",
          node.character && "huffman-node-leaf",
        )}
      >
        {renderCharacter(node.character)}
      </span>

      {(node.left || node.right) && (
        <div className="huffman-node-children">
          {node.left && <HuffmanTree node={node.left} alphabet={alphabet} />}
          {node.right && <HuffmanTree node={node.right} alphabet={alphabet} />}
        </div>
      )}
    </div>
  );
};
