'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdditionalsSchema extends Schema {
  up () {
    this.create('additionals', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('doc_number')
      table.timestamps()
    })
  }

  down () {
    this.drop('additionals')
  }
}

module.exports = AdditionalsSchema
