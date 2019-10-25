'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Additional extends Model {

    additional () {
        return this.belongsTo('App/Models/User')
    }

}

module.exports = Additional
