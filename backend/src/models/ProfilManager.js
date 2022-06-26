const AbstractManager = require("./AbstractManager");

class ProfilManager extends AbstractManager {
  static table = "profil";

  // eslint-disable-next-line camelcase
  insert(data, user_id) {
    return this.connection.query(
      `insert into ${ProfilManager.table} (id, user_id, typeaccount_id) values (?,?,?)`,
      // eslint-disable-next-line camelcase
      [user_id, user_id, data.typeaccount_id]
    );
  }

  update(profil) {
    return this.connection.query(
      `update ${ProfilManager.table} set title = ? where id = ?`,
      [profil.id, profil.typeaccount_id]
    );
  }
}

module.exports = ProfilManager;
