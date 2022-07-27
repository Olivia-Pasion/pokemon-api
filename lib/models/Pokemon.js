const pool = require('../utils/pool');

module.exports = class Pokemon {
  id;
  name;
  type;
  index;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.index = row.index;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM pokemon;');
    return rows.map((row) => new Pokemon(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM pokemon WHERE id=$1;', [id]);
    if (!rows[0]) return null;

    return new Pokemon(rows[0]);
  }
};



