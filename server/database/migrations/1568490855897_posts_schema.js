'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostsSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.string('title')
      table.string('description')
      table.text('post_content').notNullable()
      table.boolean('status').defaultTo(true)
      table.integer('group_id').unsigned().references('id').inTable('groups')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.enum('type',['post,share'])
      table.integer('references_id')
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostsSchema
