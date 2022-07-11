const models = require("../models");

class ArtistsCardController {
  static browse = (req, res) => {
    models.profil
      .findAll()
      .then(([cards]) => {
        res.send(cards);
      })
      .catch((err) => {
        console.error(err);
      });

    /* if (artistcards[0]) {
        const pictureDigital = await Promise.all(
          artistcards.map((profil) =>
            models.picture.find(profil.picture_idpicture_digital)
          )
        );
        artistcards.forEach((profil, index) => {
          artistcards[index] = { ...profil, ...pictureDigital[index] };
        });
      } 
      res.status(200).json(artistcards[0]);
    } catch (err) {
      console.error(err);
      res.status(500).send("error");
    } */
  };
}

module.exports = ArtistsCardController;
