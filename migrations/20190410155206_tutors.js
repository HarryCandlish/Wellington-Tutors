exports.up = function(knex, Promise) {
  return knex.schema.createTable("tutors", table => {
    table.increments("id");
    table.integer("user_id");
    table.integer("tech_id");
    table.string("name");
    table.string("about");
    table.string("email_address");
    table.string("contact_details");
    table.string("image");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("tutors");
};
