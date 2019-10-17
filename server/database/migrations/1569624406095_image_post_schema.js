'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImagePostSchema extends Schema {
  up () {
    this.create('image_posts', (table) => {
      table.increments()
      table.integer('post_id').unsigned().references('id').inTable('posts')
      table.integer('image_id').unsigned().references('id').inTable('images')
      table.timestamps()
    })
  }

  down () {
    this.drop('image_posts')
  }
}

module.exports = ImagePostSchema
