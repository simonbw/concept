import { Router } from "express";
import { routes } from "../../common/routes";
import { basicHtml } from "../pages/pageHtml";
import playtestRouter from "./playtestRouter";

const router = Router();
export default router;

router.use(playtestRouter);

router.get(routes.home, (req, res) => {
  res.send(
    basicHtml({
      scripts: ["/static/pages/homePage.js"],
      styles: ["/static/styles/room-index.css"],
      title: "Setup | Escape",
    }),
  );
});

router.get(routes.admin, (req, res) => {
  res.send(
    basicHtml({
      scripts: ["/static/pages/adminPage.js"],
      styles: ["/static/styles/admin-index.css"],
      title: "Admin | Escape",
    }),
  );
});

router.get(routes.room1, (req, res) => {
  res.send(
    basicHtml({
      scripts: ["/static/pages/room1Page.js"],
      styles: ["/static/styles/room-index.css"],
      title: "Room 1 | Escape",
    }),
  );
});

router.get(routes.room2, (req, res) => {
  res.send(
    basicHtml({
      scripts: ["/static/pages/room2Page.js"],
      styles: ["/static/styles/room-index.css"],
      title: "Room 2 | Escape",
    }),
  );
});

router.get(routes.clock1, (req, res) => {
  res.send(
    basicHtml({
      scripts: ["/static/pages/clock1Page.js"],
      styles: ["/static/styles/room-index.css"],
      title: "Clock 1 | Escape",
    }),
  );
});

router.get(routes.clock2, (req, res) => {
  res.send(
    basicHtml({
      scripts: ["/static/pages/clock2Page.js"],
      styles: ["/static/styles/room-index.css"],
      title: "Clock 2 | Escape",
    }),
  );
});

router.get(routes.huffmanManual, (req, res) => {
  res.send(
    basicHtml({
      scripts: ["/static/pages/huffmanManualPage.js"],
      styles: ["/static/styles/print-index.css"],
      title: "Huffman",
    }),
  );
});

router.get(routes.huffmanClue, (req, res) => {
  res.send(
    basicHtml({
      scripts: ["/static/pages/huffmanCluePage.js"],
      styles: ["/static/styles/print-index.css"],
      title: "Huffman",
    }),
  );
});
