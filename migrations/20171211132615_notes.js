exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', table => {
    table.increments();
    table.integer('user_id')
    table.foreign('user_id').references('id').inTable('users')
    table.integer('category_id')
    table.foreign('category_id').references('id').inTable('categories')
    table.string('title').notNullable().default("")
    table.string('note').notNullable().default("")
    table.integer('priority').default(1)
    table.integer('like').default(0)
    table.integer('dislike').default(0)
    table.boolean('pin')
    table.dateTime('reminder')
    table.string('tag')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes');
};
