const router = require("express").Router();
const {
  models: { Artwork, User, Prompt },
} = require("../db");
module.exports = router;

//all artwork view
router.get("/", async (req, res, next) => {
  try {
    const gallery = await Artwork.findAll({
      include: {
        model: User,
        as: 'user',
      },
      // include: {
      //   model: Prompt,
      //   as: 'prompt',
      // },
      attributes: ["id", "imageUrl", "title"],
    });
    res.json(gallery);
  } catch (err) {
    next(err);
  }
});

//art full view
router.get("/:id", async (req, res, next) => {
  try {
    const artById = await Artwork.findOne({
      where: { id: req.params.id },
      include: {
        model: User,
        as: "user",
      },
      attributes: [`id`,`title`, `imageUrl`, `description`, `medium`],
    });
    res.json(artById);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newArt = await Artwork.create(req.body);
    res.send(newArt);
  } catch (err){
    next(err);
  }
})

/*
Also need the following:
- display artwork by artist
- POST new artwork using express fileupload
- connect to prompt */
