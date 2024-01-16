import React from "react";
import { renderPage } from "../utils/renderPage";

renderPage(
  <div className="printed relative my-4">
    <div className="absolute right-1 top-9 -rotate-6 text-red-600 opacity-90 w-fit">
      <h1 className="px-2 py-1 border-red-600 border-4 rounded-sm">
        CLASSIFIED
      </h1>
      <p className="text-xs px-1 font-bold text-center">
        Some information has been redacted
      </p>
    </div>
    <h1>Huffman Encoding Specifications</h1>
    <dl className="ml-8">
      <li>
        <dt>Version:</dt>
        <dd>1.0</dd>
      </li>
      <li>
        <dt>Date:</dt>
        <dd> 1962-06-13</dd>
      </li>
      <li>
        <dt>Author:</dt>
        <dd>
          <s>Technical Writing Team</s>
        </dd>
      </li>
    </dl>
    <h2>1. Introduction</h2>
    <p>
      Huffman Encoding is an entropy-based lossless data compression algorithm
      that is widely used in applications such as data file compression (ZIP
      files, TAR files), image compression (JPEG), and many more. The method was
      developed by David A. Huffman in 1952 and serves to minimize the average
      code length used to represent a string of symbols.
    </p>
    <h2>2. Algorithm Overview</h2>
    <section>
      <h3>2.1 Building the Frequency Table</h3>
      <p>
        Scan the input data to determine the frequency of each character. Record
        the number of occurences of each character.
      </p>
      <h3>2.2 Constructing the Huffman Tree</h3>
      <p>
        <s>
          While the priority queue has more than one node: Remove the two nodes
          with the lowest frequencies. Create a new internal node with a
          frequency equal to the sum of the two nodes' frequencies. Insert the
          new internal node back into the priority queue.
        </s>
      </p>
      <h3>2.3 Code Generation</h3>
      <p>
        Traverse the constructed Huffman tree to generate a binary code for each
        symbol. Moving to the left child adds a <s>'0'</s>; moving to the right
        child adds a <s>'1'</s>.
      </p>
      <h3>2.4 Encoding</h3>
      <p>
        Replace each symbol in the original data with its corresponding Huffman
        code in the code table.
      </p>
      <h3>2.5 Decoding</h3>
      <p>
        Traverse the Huffman tree according to the Huffman codes. Begin at the
        root of the tree. For each bit in the encoded data, move to the left
        child if the bit is a <s>'0'</s> and move to the right child if the bit
        is a <s>'1'</s>. When a leaf node is reached, output the corresponding
        symbol and return to the root of the tree.
      </p>
    </section>
    <h2>3. Requirements</h2>
    Memory to store the frequency table and Huffman tree. Priority queue or
    min-heap data structure for the algorithm.
    <h2>4. Use Cases</h2>
    File Compression Image Compression Text Compression Streaming Video Data
    <h2>5. Limitations</h2>
    Overhead of storing the Huffman tree for decompression. Not suitable for
    data with uniformly distributed symbols.
    <h2>6. References</h2>
    Huffman, D. A., "A Method for the Construction of Minimum-Redundancy Codes,"
    Proceedings of the Institute of Radio Engineers, vol. 40, no. 9, pp.
    1098-1101, 1952. For further inquiries, please contact{" "}
    <s>the technical support team.</s>
  </div>,
);
