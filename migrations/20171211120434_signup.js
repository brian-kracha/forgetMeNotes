exports.up = function(knex, Promise) {
  return knex.schema.createTable('signup', table => {
    table.increments();
    table.string('username').notNullable().default("")
    table.string('email').notNullable().default("")
    table.string('password').notNullable()
    table.dateTime('DOB').notNullable()
    table.string('question').notNullable()
    table.string('answer').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('signup');
};
