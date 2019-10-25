'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CurriculumsSchema extends Schema {
  up () {
    this.create('curriculums', (table) => {
      table.increments()
      table.string('path')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('curriculums')
  }
}

module.exports = CurriculumsSchema
