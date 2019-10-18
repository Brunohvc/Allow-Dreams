'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GalleriesSchema extends Schema {
  up () {
    this.create('galleries', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('name')
      table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('galleries')
  }
}

module.exports = GalleriesSchema
