
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('username').notNullable().default("")
    table.string('email').notNullable().default("")
    table.string('user_id').notNullable()
    table.foreign('user_id').references('uuid').inTable('signup')
    table.string('friend').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
