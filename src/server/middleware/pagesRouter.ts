import { Router } from "express";
import { routes } from "../../common/routes";
import { basicHtml } from "../pages/pageHtml";

const router = Router();
export default router;

router.get("/admin", (req, res) => {
  res.send(
    basicHtml({
      scripts: ["/static/pages/admin-page.js"],
      styles: ["/static/styles/index.css"],
      title: "Concept",
    })
  );
});

router.get("/", (req, res) => {
  res.send(
    basicHtml({
      scripts: ["/static/pages/game-page.js"],
      styles: ["/static/styles/index.css"],
      title: "Concept",
    })
  );
});

router.get("/:gameId", (req, res) => {
  res.send(
    basicHtml({
      scripts: ["/static/pages/game-page.js"],
      styles: ["/static/styles/index.css"],
      title: "Concept",
    })
  );
});
