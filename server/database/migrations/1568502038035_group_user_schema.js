'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GroupUserSchema extends Schema {
  up () {
    this.create('group_user', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('group_id').unsigned().references('id').inTable('groups')
      table.enum('acess_level',['admin','user'])
      table.timestamps()
    })
  }

  down () {
    this.drop('group_user')
  }
}

module.exports = GroupUserSchema
