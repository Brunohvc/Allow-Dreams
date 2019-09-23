'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostsSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.text('post_content').notNullable()
      table.string('status').notNullable()
      // table.morphs('photoable')
      table.integer('group_id').unsigned().references('id').inTable('groups')
      table.integer('user_id').unsigned().references('id').inTable('users')
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostsSchema
