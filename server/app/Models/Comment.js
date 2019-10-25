'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comment extends Model {

    post () {
        return this.hasOne('App/Models/Post')
    }

    user () {
        return this.hasOne('App/Models/User')
    }

    comment () {
        return this.hasOne('App/Models/Like')
    }
}

module.exports = Comment
