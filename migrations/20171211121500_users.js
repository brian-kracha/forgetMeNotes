exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('username').notNullable().default("")
    table.string('email').notNullable().default("")
    table.string('friend').notNullable()
    table.integer('user_id')
    table.foreign('user_id').references('id').inTable('signup').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
