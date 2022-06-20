const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (email) values (?)`,
      [user.email]
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
