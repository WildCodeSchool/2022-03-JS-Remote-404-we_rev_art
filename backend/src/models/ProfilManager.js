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

  find(id) {
    return this.connection
      .query(`select * from  ${this.table} where user_id = ?`, [id])
      .then((res) => res[0]);
  }

  update(profil, email) {
    return this.connection.query(
      `UPDATE ${ProfilManager.table} INNER JOIN user ON profil.user_id = user.id SET  ? WHERE email = ?`,
      [profil, email]
    );
  }
}

module.exports = ProfilManager;
