const AbstractManager = require("./AbstractManager");

class ProfilManager extends AbstractManager {
  static table = "profil";

  /* insert(id, typeaccount_id) {
    return this.connection.query(
      `insert into ${ProfilManager.table} (id, typeaccount_id) values (?,?)`,
      [id, typeaccount_id]
    );
  } */

  update(profil) {
    return this.connection.query(
      `update ${ProfilManager.table} set title = ? where id = ?`,
      [profil.id, profil.typeaccount_id]
    );
  }
}

module.exports = ProfilManager;
