'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlansSchema extends Schema {
  up () {
    this.create('plans', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('value').notNullable()
      table.text('description').notNullable()
      table.text('benefits').nullable()
      table.boolean('status').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('plans')
  }
}

module.exports = PlansSchema
