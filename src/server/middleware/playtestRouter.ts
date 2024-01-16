import { Router } from "express";
import { routes } from "../../common/routes";
import { basicHtml } from "../pages/pageHtml";

const router = Router();
export default router;

router.get(routes.playtest.index, (req, res) => {
  res.send(
    basicHtml({
      scripts: ["/static/pages/playtest/playtestIndexPage.js"],
      styles: ["/static/styles/room-index.css"],
      title: "Index | Escape Room Playtest",
    }),
  );
});

router.get(routes.playtest.clue1a, (req, res) => {
  res.send(
    basicHtml({
      scripts: ["/static/pages/huffmanCluePage.js"],
      styles: ["/static/styles/print-index.css"],
      title: "war_of_the_worlds.txt | Escape Room Playtest",
    }),
  );
});

router.get(routes.playtest.clue1b, (req, res) => {
  res.send(
    basicHtml({
      scripts: ["/static/pages/huffmanManualPage.js"],
      styles: ["/static/styles/print-index.css"],
      title: "Huffman_Encoding_Manual.pdf",
    }),
  );
});

router.get(routes.playtest.puzzle1, (req, res) => {
  res.send(
    basicHtml({
      scripts: ["/static/pages/playtest/huffmanTestPage.js"],
      styles: ["/static/styles/room-index.css"],
      title: "Puzzle 1 | Escape Room Playtest",
    }),
  );
});
router.get(routes.playtest.puzzle1ez, (req, res) => {
  res.send(
    basicHtml({
      scripts: ["/static/pages/playtest/huffmanEasyTestPage.js"],
      styles: ["/static/styles/room-index.css"],
      title: "Puzzle 1 EZ | Escape Room Playtest",
    }),
  );
});

router.get(routes.playtest.puzzle2a, (req, res) => {
  res.send(
    basicHtml({
      scripts: ["/static/pages/playtest/witnessTestPage.js"],
      styles: ["/static/styles/room-index.css"],
      title: "Puzzle 2 (A) | Escape Room Playtest",
    }),
  );
});

router.get(routes.playtest.puzzle2b, (req, res) => {
  res.send(
    basicHtml({
      scripts: ["/static/pages/playtest/witnessTestPage.js"],
      styles: ["/static/styles/room-index.css"],
      title: "Puzzle 2 (B) | Escape Room Playtest",
    }),
  );
});
