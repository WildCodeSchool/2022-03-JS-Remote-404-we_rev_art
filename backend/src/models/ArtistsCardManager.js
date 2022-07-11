const AbstractManager = require("./AbstractManager");

class ArtistsCardManager extends AbstractManager {
  static table = "profil";

  // eslint-disable-next-line class-methods-use-this
  andOrWhere(sqlQueryToTest) {
    return sqlQueryToTest.includes("WHERE") ? " AND" : " WHERE";
  }

  findAll() {
    /*  const { limit } = query;
    const sqlValue = []; */

    /* if (contracttype)
      sql += `INNER JOIN profil_has_contracttype AS phc ON pr.profil_id = phc.profil_id `;
    if (usertype)
      sql += `INNER JOIN profil_has_usertype AS phu on pr.profil_id = phu.profil_id `;

    if (skills) {
      const skillsArray = skills.split("|");
      sql += `${this.andOrWhere(sql)} ( phs.id = ? `;
      if (skillsArray[1]) {
        skillsArray.forEach((element, index) => {
          if (index > 0) {
            sql += `OR phs.id = ? `;
          }
        });
      }
      sql += `) `;
      sqlValue = [...sqlValue, ...skillsArray];
    }

    if (usertype) {
      const usertypeArray = usertype.split("|");
      sql += `${this.andOrWhere(sql)} ( phu.usertype_id = ? `;
      if (usertypeArray[1]) {
        usertypeArray.forEach((element, index) => {
          if (index > 0) {
            sql += `OR phu.usertype_id = ? `;
          }
        });
      }
      sql += `) `;
      sqlValue = [...sqlValue, ...usertypeArray];
    }

    if (contracttype) {
      const contracttypeArray = contracttype.split("|");
      sql += `${this.andOrWhere(sql)} ( phc.contracttype_id = ? `;
      if (contracttypeArray[1]) {
        contracttypeArray.forEach((element, index) => {
          if (index > 0) {
            sql += `OR phc.contracttype_id = ? `;
          }
        });
      }
      sql += `) `;
      sqlValue = [...sqlValue, ...contracttypeArray];
    } 

    if (limit && limit < 25) {
      sql += `LIMIT ${limit}`;
    } else {
      sql += `LIMIT 25`;
    } */
    // console.log(sql);
    return this.connection
      .query(
        `SELECT * FROM ${ArtistsCardManager.table} WHERE typeaccount_id = 1 `
      )
      .then((res) => res[0]);
  }

  insert(item) {
    return this.connection.query(
      `insert into ${ArtistsCardManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${ArtistsCardManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ArtistsCardManager;
