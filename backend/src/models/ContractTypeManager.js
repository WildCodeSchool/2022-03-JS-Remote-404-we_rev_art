const AbstractManager = require("./AbstractManager");

class ContractTypeManager extends AbstractManager {
  static table = "contracttype";

  insert(item) {
    return this.connection.query(
      `insert into ${ContractTypeManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${ContractTypeManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ContractTypeManager;
