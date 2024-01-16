export const huffmanManualMd = /*markdown*/ `
# Huffman Encoding Overview

Version: 1.0

Date: 2023-09-10

Author: Technical Writing Team

Table of Contents

1. Introduction
1. Algorithm Overview
1. Requirements
1. Use Cases
1. Limitations
1. References

## 1. Introduction

Huffman Encoding is an entropy-based lossless data compression algorithm that is widely used in applications such as data file compression (ZIP files, TAR files), image compression (JPEG), and many more. The method was developed by David A. Huffman in 1952 and serves to minimize the average code length used to represent a string of symbols.

## 2. Algorithm Overview

### 2.1 Building the Frequency Table

Scan the input data to determine the frequency of each symbol.
Create a priority queue or min-heap and populate it with nodes, each containing a symbol and its corresponding frequency.

### 2.2 Constructing the Huffman Tree

While the priority queue has more than one node:
Remove the two nodes with the lowest frequencies.
Create a new internal node with a frequency equal to the sum of the two nodes' frequencies.
Insert the new internal node back into the priority queue.

### 2.3 Code Generation

Traverse the constructed Huffman tree to generate a binary code for each symbol.
Moving to the left child adds a '0'; moving to the right child adds a '1'.

### 2.4 Encoding

Replace each symbol in the original data with its corresponding Huffman code.

### 2.5 Decoding

Traverse the Huffman tree according to the Huffman codes to reconstruct the original data.

## 3. Requirements

Memory to store the frequency table and Huffman tree.
Priority queue or min-heap data structure for the algorithm.

## 4. Use Cases

File Compression
Image Compression
Text Compression
Streaming Video Data

## 5. Limitations

Overhead of storing the Huffman tree for decompression.
Not suitable for data with uniformly distributed symbols.

## 6. References

Huffman, D. A., "A Method for the Construction of Minimum-Redundancy Codes," Proceedings of the Institute of Radio Engineers, vol. 40, no. 9, pp. 1098-1101, 1952.

For further inquiries, please contact the technical support team.
`;
