// 'users' table

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table=>{
    table.increments()
    table.string('name').notNullable()
    table.string('username').notNullable()
    table.string('password').notNullable()
    table.string('org').notNullable()
    table.boolean('admin').defaultTo(false)
    table.integer('orgID').notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
