'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InvoicesSchema extends Schema {
  up () {
    this.create('invoices', (table) => {
      table.increments()
      table.date('expiry_date')
      table.date('entry_date')
      table.string('bar_code').nullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('invoices')
  }
}

module.exports = InvoicesSchema
