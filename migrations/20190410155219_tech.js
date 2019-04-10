exports.up = function(knex, Promise) {
  return knex.schema.createTable("tech", table => {
    table.increments("id");
    table.string("technology");
    table.string("description");
    table.string("image");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("tech");
};
