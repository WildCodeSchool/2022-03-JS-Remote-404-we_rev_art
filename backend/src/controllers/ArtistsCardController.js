const models = require("../models");

class ArtistsCardController {
  static browse = async (req, res) => {
    try {
      const artworks = await models.artwork.findAll(req.query);
      if (artworks[0]) {
        const pictureDigital = await Promise.all(
          artworks.map((profil) =>
            models.picture.find(profil.picture_idpicture_digital)
          )
        );
        artworks.forEach((profil, index) => {
          artworks[index] = { ...profil, ...pictureDigital[index] };
        });
      }
      res.status(200).json(artworks);
    } catch (err) {
      console.error(err);
      res.status(500).send("error");
    }
  };
}

module.exports = ArtistsCardController;
