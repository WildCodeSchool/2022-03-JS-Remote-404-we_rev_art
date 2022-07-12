const AbstractManager = require("./AbstractManager");

class MyProjectAdsManager extends AbstractManager {
  static table = "artwork";

  // eslint-disable-next-line class-methods-use-this
  andOrWhere(sqlQueryToTest) {
    return sqlQueryToTest.includes("WHERE") ? " AND" : " WHERE";
  }

  findAll() {
    const sql = `select DISTINCT p.idpicture,p.image,p.alt,
    sk.skills,
    pr.id,
    b.budget,
    t.timeframe,
    art.timeframe_id,art.budget_id,art.profil_id,art.skills_id,
    art.id,art.hashtag,art.title,art.deadline,art.details,art.date,art.offers,art.likes,
    art.picture_idpicture_original FROM  ${this.table} AS art 
    INNER JOIN picture AS p ON art.picture_idpicture_original = p.idpicture 
    INNER JOIN skills AS sk ON art.skills_id = sk.id 
    INNER JOIN profil AS pr ON art.profil_id = pr.id 
    INNER JOIN budget AS b on art.budget_id = b.id 
    INNER JOIN timeframe AS t on art.timeframe_id = t.id 
    INNER JOIN user AS u ON pr.user_id = u.id `;

    return this.connection.query(sql).then((res) => res[0]);
  }

  insert(item) {
    return this.connection.query(
      `insert into ${MyProjectAdsManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${MyProjectAdsManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = MyProjectAdsManager;
