const AbstractManager = require("./AbstractManager");

class UserTypeManager extends AbstractManager {
  static table = "usertype";

  insert(item) {
    return this.connection.query(
      `insert into ${UserTypeManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${UserTypeManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = UserTypeManager;
