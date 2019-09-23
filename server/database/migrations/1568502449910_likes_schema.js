'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LikesSchema extends Schema {
  up () {
    this.create('likes', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('group_id').unsigned().references('id').inTable('groups').nullable()
      table.integer('comment_id').unsigned().references('id').inTable('comments').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('likes')
  }
}

module.exports = LikesSchema
