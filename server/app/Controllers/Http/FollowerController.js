'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with followers
 */
class FollowerController {
  /**
   * Show a list of all followers.
   * GET followers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new follower.
   * GET followers/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new follower.
   * POST followers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const follower = new Follower()
    follower.user_id_follower = request.input('user_id_follower')
    follower.user_id_followed_id = request.input('user_id_followed_id')
    follower.status = request.input('status')

    follower.save()

    return response.json(follower)
  }

  /**
   * Display a single follower.
   * GET followers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {
    let follower = await Follower.query('id', params.id).fetch()
    return response.json(follower)
  }

  /**
   * Render a form to update an existing follower.
   * GET followers/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update follower details.
   * PUT or PATCH followers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let follower = await Follower.find(params.id)

    follower.user_id_follower = request.input('user_id_follower')
    follower.user_id_followed_id = request.input('user_id_followed_id')
    follower.status = request.input('status')

    return response.json(follower)
  }

  /**
   * Delete a follower with id.
   * DELETE followers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
    let follower = await Follower.find(params.id)

    follower.status = 'deny';
    return response.json({messsage: 'Follower deleted!'})
  }
}

module.exports = FollowerController
