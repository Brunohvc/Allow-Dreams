'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SettingsSchema extends Schema {
  up () {
    this.create('settings', (table) => {
      table.increments()
      table.string('language').default('pt-br')
      table.string('theme').nullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('settings')
  }
}

module.exports = SettingsSchema
