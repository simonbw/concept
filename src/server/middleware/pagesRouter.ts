import { Router } from "express";
import { routes } from "../../common/routes";
import { basicHtml } from "../pages/pageHtml";

const router = Router();
export default router;

router.get(routes.home, (req, res) => {
  res.send(
    basicHtml({
      scripts: ["/static/pages/game-page.js"],
      styles: ["/static/styles/game-page-index.css"],
      title: "Concept",
    })
  );
});
