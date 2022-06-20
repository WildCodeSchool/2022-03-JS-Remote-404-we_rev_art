const AbstractManager = require("./AbstractManager");

class SkillsManager extends AbstractManager {
  static table = "skills";

  insert(skills) {
    return this.connection.query(
      `insert into ${SkillsManager.table} (skills) values (?)`,
      [skills.skills]
    );
  }

  update(skills) {
    return this.connection.query(
      `update ${SkillsManager.table} set skills = ? where id = ?`,
      [skills.skills, skills.id]
    );
  }
}

module.exports = SkillsManager;