'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImagesSchema extends Schema {
  up () {
    this.create('images', (table) => {
      table.increments()
      table.integer('gallery_id').unsigned().references('id').inTable('galleries')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('path')
      table.timestamps()
    })
  }

  down () {
    this.drop('images')
  }
}

module.exports = ImagesSchema
