const router = require("express").Router();
const {
  models: { User, Artwork },
} = require("../db");
module.exports = router;

//helps with log in
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "username"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

//profile view
router.get("/:id", async (req, res, next) => {
  try {
    const userById = await User.findOne({
      where: { id: req.params.id},
      include: {
        model: Artwork,
        as: "uploads",
      },
      attributes: [`id`, `username`, `avatar`, `about`, `pronouns`],
    });
    res.json(userById);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const userById = await User.findByPk({
      where: { id: req.params.userId },
      include: {
        model: Artwork,
        as: "artworks",
      },
      attributes: [`id`, `username`, `avatar`, `about`, `pronouns`],
    });
    res.json(userById);
  } catch (err) {
    next(err);
  }
});