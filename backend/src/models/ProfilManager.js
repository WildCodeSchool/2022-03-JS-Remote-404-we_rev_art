const AbstractManager = require("./AbstractManager");

class ProfilManager extends AbstractManager {
  static table = "profil";

  // eslint-disable-next-line camelcase
  insert(id, typeaccount_id) {
    return this.connection.query(
      `insert into ${ProfilManager.table} (id, user_id, typeaccount_id) values (?,?,?)`,
      // eslint-disable-next-line camelcase
      [id, id, typeaccount_id]
    );
  }

  update(profil) {
    return this.connection.query(
      `update ${ProfilManager.table} set title = ? where id = ?`,
      [profil.id, profil.typeaccount_id]
    );
  }

  find(id) {
    return this.connection
      .query(`select * from  ${this.table} where user_id = ?`, [id])
      .then((res) => res[0]);
  }
}

module.exports = ProfilManager;
