
exports.up = function(knex, Promise) {
    return knex.schema.createTable('fiction', table => {
        table.increments('id')
        table.string('text')
        table.string('author')
        table.string('year')
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('fiction')
  
};
