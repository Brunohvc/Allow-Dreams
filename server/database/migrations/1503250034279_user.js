'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.string('nickname', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.datetime('birth_date').nullable()
      table.string('phone').notNullable()
      table.string('password', 60).notNullable()
      table.enum('genre',['male','female','other'])
      table.boolean('private_profile').defaultTo(false)
      table.integer('plan_id').unsigned().references('id').inTable('plans')
      table.boolean('status').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
