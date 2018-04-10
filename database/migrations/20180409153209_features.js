exports.up = function(knex, Promise) {
  return knex.schema.createTable('features', table=>{
    table.increments()
    table.json('data')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
