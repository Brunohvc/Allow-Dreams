'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Image extends Model {

    gallery () {
        return this.belongsTo('App/Models/Gallery')
    }

    user () {
        return this.belongsTo('App/Models/User')
    }
}

module.exports = Image
