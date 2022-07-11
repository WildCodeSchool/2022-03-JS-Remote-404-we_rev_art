const models = require("../models");

class MyProjectAdsController {
  static browse = async (req, res) => {
    try {
      const myprojectads = await models.artwork.findAll(req.query);
      if (myprojectads[0]) {
        const pictureDigital = await Promise.all(
          myprojectads.map((artwork) =>
            models.picture.find(artwork.picture_idpicture_digital)
          )
        );
        myprojectads.forEach((artwork, index) => {
          myprojectads[index] = { ...artwork, ...pictureDigital[index] };
        });
      }
      res.status(200).json(myprojectads);
    } catch (err) {
      console.error(err);
      res.status(500).send("error");
    }
  };
}

module.exports = MyProjectAdsController;
