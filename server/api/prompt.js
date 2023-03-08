const router = require("express").Router();
const {
  models: { Artwork, User, Prompt },
} = require("../db");
module.exports = router;

//all prompts view - shows first three artwork thumbnails
router.get("/", async (req, res, next) => {
  try {
    const allView = await Prompt.findAll({
      include: {
        model: Artwork,
        as: 'artworks',
      },
      attributes: ["shortPrompt", "category"],
    });
    res.json(allView);
  } catch (err) {
    next(err);
  }
});

//current prompt
router.get(":/promptId", async (req, res, next) => {
  try {
    const promptById = await Prompt.findOne({
      where: { id: req.params.promptId },
      include: {
        model: Artwork,
        as: "artworks",
      },
      attributes: [`shortPrompt`, `category`, `expandedPrompt`],
    });
    res.json(promptById);
  } catch (err) {
    next(err);
  }
});