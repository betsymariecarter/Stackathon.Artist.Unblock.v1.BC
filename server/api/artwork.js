const router = require("express").Router();
const {
  models: { Artwork, User },
} = require("../db");
module.exports = router;

//all artwork view
router.get("/", async (req, res, next) => {
  try {
    const gallery = await Artwork.findAll({
      include: {
        model: User,
        as: 'artist',
      },
      attributes: ["imageUrl", "title"],
    });
    res.json(gallery);
  } catch (err) {
    next(err);
  }
});

//art full view
router.get(":/artworkId", async (req, res, next) => {
  try {
    const artById = await Artwork.findOne({
      where: { id: req.params.artworkId },
      include: {
        model: User,
        as: "artist",
      },
      attributes: [`title`, `imageUrl`, `description`, `medium`],
    });
    res.json(artById);
  } catch (err) {
    next(err);
  }
});

/*
Also need the following:
- display artwork by artist
- POST new artwork using express fileupload
- connect to prompt */