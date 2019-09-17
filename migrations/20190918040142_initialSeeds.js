
exports.up = function(knex) {
  return knex.schema.createTable('images', table => {
      table.increments('id').primary()
      table.string('title')
      table.string('path')
      table.string('tags').reference()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('images')
};
