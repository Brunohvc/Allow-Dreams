'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Setting = use('App/Models/Setting')

/**
 * Resourceful controller for interacting with settings
 */
class SettingController {
  /**
   * Create/save a new setting.
   * POST settings
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const setting = new Settings()
    setting.language = request.input('language')
    setting.theme = request.input('theme')
    setting.user_id = request.input('user_id')

    await setting.save();

    return response.json(setting);
  }

  /**
   * Display a single setting.
   * GET settings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {
    let setting = await Setting.query('id',params.id).fetch()
    return response.json(setting)
  }


  /**
   * Update setting details.
   * PUT or PATCH settings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ request, response }) {

    let setting = await Setting.find(param.id)

    setting.language = request.input('language')
    setting.theme = request.input('theme')

    return response.json(setting)
  }

  /**
   * Delete a setting with id.
   * DELETE settings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
    let setting = await Setting.find(params.id)

    setting.status = false

    return response.json({message: 'Contact deleted!'})
  }
}

module.exports = SettingController
