const models = require("../models");

class ProfilController {
  static browse = async (req, res) => {
    try {
      const [profils] = await models.profil.findAll(req.params);
      const skills = await Promise.all(
        profils.map((profil) => models.skills.findByProfilId(profil.id))
      );
      profils.forEach((profil, index) => {
        // eslint-disable-next-line no-param-reassign
        profil.skills = skills[index];
      });
      res.status(200).json(profils);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

  static read = (req, res) => {
    models.profil
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const profil = req.body;

    // TODO validations (length, format...)

    profil.id = req.params.id;

    models.profil
      .update(profil)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const profil = req.body;

    // TODO validations (length, format...)

    models.profil
      .insert(profil)
      .then(([result]) => {
        res.status(201).send({ ...profil, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.profil
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ProfilController;
