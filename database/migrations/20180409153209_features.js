exports.up = function(knex, Promise) {
  return knex.schema.createTable('features', table=>{
    table.increments()
    table.json('data')
    table.integer('orgID')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('features')
}
