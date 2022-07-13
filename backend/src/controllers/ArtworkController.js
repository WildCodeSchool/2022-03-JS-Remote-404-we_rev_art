const models = require("../models");

class ArtworkController {
  static browse = async (req, res) => {
    try {
      const artworks = await models.artwork.findAll(req.query);
      if (artworks[0]) {
        const pictureDigital = await Promise.all(
          artworks.map((artwork) =>
            models.picture.find(artwork.picture_idpicture_digital)
          )
        );
        artworks.forEach((artwork, index) => {
          artworks[index] = { ...artwork, ...pictureDigital[index] };
        });
      }
      res.status(200).json(artworks);
    } catch (err) {
      console.error(err);
      res.status(500).send("error");
    }
  };

  static getMine = async (req, res) => {
    try {
      const [user] = await models.profil.findOnebyUserEmail(req.user.email);
      if (user[0]) {
        const [projects] = await models.artwork.findbyProfil(user[0].id);
        res.status(200).json(projects);
      } else {
        res.status(400).send("user not found");
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("error");
    }
  };

  static add = (req, res) => {
    const postanad = req.body;
    // TODO validations (length, format...)

    models.artwork
      .insert(postanad)
      .then(() => {
        res.status(201).send("ca marche");
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ArtworkController;
