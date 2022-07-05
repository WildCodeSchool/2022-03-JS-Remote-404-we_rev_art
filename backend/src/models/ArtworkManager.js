const AbstractManager = require("./AbstractManager");

class ArtworkManager extends AbstractManager {
  static table = "artwork";

  findAll(query) {
    const sqlvalue = [];

    let sql = `select * from  ${this.table} AS art 
    INNER JOIN picture AS p ON art.picture_idpicture_original = p.idpicture 
    INNER JOIN skills AS sk ON art.skills_id = sk.id `;
    if (query.limit && query.limit < 25) {
      sql += `LIMIT ${query.limit}`;
    } else {
      sql += `LIMIT 25`;
    }
    return this.connection.query(sql, sqlvalue).then((res) => res[0]);
  }

  insert(item) {
    return this.connection.query(
      `insert into ${ArtworkManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${ArtworkManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ArtworkManager;
