exports.up = function(knex, Promise) {
  return knex.schema.createTable('image_url', table => {
    table.increments();
    table.integer('user_id')
    table.string('image_url').default('')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('image_url');
};
