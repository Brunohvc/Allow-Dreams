'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {
    
    user () {
        return this.belongsTo('App/Models/User')
    }

    group () {
        return this.belongsTo('App/Models/Group')
    }

    comments () {
        return this.hasMany('App/Models/Comment')
    }

    likes () {
        return this.hasMany('App/Models/Like') 
    }

    style() {
        return this.hasOne('App/Models/Style')
    }
}

module.exports = Post
