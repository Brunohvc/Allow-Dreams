'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Style = use('App/Models/Style')

class StyleController {

      /**
   * Create/save a new setting.
   * POST settings
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const style = new Style()
    style.language = request.input('language')
    style.theme = request.input('theme')
    style.user_id = request.input('user_id')

    await style.save();

    return response.json(style);
  }

      /**
    * Update user details.
    * PUT or PATCH users/:id
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    */
   async update({ params, request, response }) {
    const post_id = request.input('post_id')
    const offset = request.input('offset')
    const length = request.input('length')
    const style = request.input('style')

    let user = await User.find(params.id)

    user.post_id = post_id
    user.offset = offset
    user.length = length
    user.style = style

    return response.json(user)
    
  }

    /**
    * Delete a user with id.
    * DELETE users/:id
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    */
   async destroy({ params, request, response }) {

    let user = await User.find(params.id)

    user.status = false

    return response.json({ message: 'Contact deleted!' })
  }

}

module.exports = StyleController
