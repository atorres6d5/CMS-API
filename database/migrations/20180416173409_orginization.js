// "org table"
exports.up = function(knex, Promise) {
  return knex.schema.createTable('orginization', table=>{
    table.increments()
    table.string('name').notNullable()
  })
};

exports.down = function(knex, Promise) {

};
