const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  insert(id, hash, email) {
    return this.connection.query(
      `insert into ${UserManager.table} (id, password, email) values (?,?,?)`,
      [id, hash, email]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set title = ? where id = ?`,
      [user.email, user.id]
    );
  }
}

module.exports = UserManager;
