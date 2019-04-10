exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", table => {
    table.increments("id");
    table.string("name");
    table.string("about");
    table.string("email_address");
    table.string("contact_details");
    table.string("image");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
