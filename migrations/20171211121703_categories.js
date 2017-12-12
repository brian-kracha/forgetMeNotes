
exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', table => {
    table.increments();
    table.string('title').notNullable().default("")
    table.string('summary').notNullable()
    table.string('image_url').notNullable()
    table.integer('user_id')
    table.foreign('user_id').references('id').inTable('users')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories');
};
