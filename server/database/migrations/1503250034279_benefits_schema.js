'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BenefitsSchema extends Schema {
  up () {
    this.create('benefits', (table) => {
      table.increments()
      table.string('name')
      table.string('description')
      table.boolean('status').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('benefits')
  }
}

module.exports = BenefitsSchema
