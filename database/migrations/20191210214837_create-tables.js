
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increment();

      tbl.string('username', 128)
           .notNullable()
           .unique();
      tbl.string('password', 128).notNullable();
      tbl.string('departments', 128).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};