const AbstractManager = require("./AbstractManager");

class ProfilManager extends AbstractManager {
  static table = "profil";

  insert(profil) {
    return this.connection.query(
      `insert into ${ProfilManager.table} (profil) values (?)`,
      [profil.profil]
    );
  }

  update(profil) {
    return this.connection.query(
      `update ${ProfilManager.table} set profil = ? where id = ?`,
      [profil.profil, profil.id]
    );
  }
}

module.exports = ProfilManager;
