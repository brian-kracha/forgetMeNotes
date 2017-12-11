
exports.up = function(knex, Promise) {
  return knex.schema.createTable('signin', table => {
    table.increment();
    table.string('email').notNullable().default("")
    table.string('password').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('signin');
};
