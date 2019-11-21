'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StylesSchema extends Schema {
  up () {
    this.create('styles', (table) => {
      table.increments()
      table.integer('post_id').unsigned().references('id').inTable('posts')
      table.integer('offset')
      table.integer('length')
      table.string('style')
      table.timestamps()
    })
  }

  down () {
    this.drop('styles')
  }
}

module.exports = StylesSchema
