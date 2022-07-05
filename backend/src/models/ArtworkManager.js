const AbstractManager = require("./AbstractManager");

class ArtworkManager extends AbstractManager {
  static table = "artwork";

  // eslint-disable-next-line class-methods-use-this
  andOrWhere(sqlQueryToTest) {
    return sqlQueryToTest.includes("WHERE") ? " AND" : " WHERE";
  }

  findAll(query) {
    const { limit, contracttype, skills, usertype } = query;
    let sqlValue = [];

    let sql = `select * from  ${this.table} AS art 
    INNER JOIN picture AS p ON art.picture_idpicture_original = p.idpicture 
    INNER JOIN skills AS sk ON art.skills_id = sk.id
    INNER JOIN profil AS pr ON art.profil_id = pr.id `;
    if (skills) {
      const skillsArray = skills.split("|");
      sql += `${this.andOrWhere(sql)} art.skills_id = ? `;
      if (skillsArray[1]) {
        skillsArray.forEach((element, index) => {
          if (index > 0) {
            sql += `OR art.skills_id = ? `;
          }
        });
      }
      sqlValue = [...sqlValue, ...skillsArray];
    }

    if (contracttype) {
      const contracttypeArray = contracttype.split("|");
      sql += `${this.andOrWhere(sql)} art.contracttype_id = ? `;
      if (contracttypeArray[1]) {
        contracttypeArray.forEach((element, index) => {
          if (index > 0) {
            sql += `OR art.contracttype_id = ? `;
          }
        });
      }
      sqlValue = [...sqlValue, ...contracttypeArray];
    }

    if (usertype) {
      const usertypeArray = usertype.split("|");
      sql += `${this.andOrWhere(sql)} art.usertype_id = ? `;
      if (usertypeArray[1]) {
        usertypeArray.forEach((element, index) => {
          if (index > 0) {
            sql += `OR art.usertype_id = ? `;
          }
        });
      }
      sqlValue = [...sqlValue, ...usertypeArray];
    }

    if (limit && limit < 25) {
      sql += `LIMIT ${limit}`;
    } else {
      sql += `LIMIT 25`;
    }
    return this.connection.query(sql, sqlValue).then((res) => res[0]);
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
