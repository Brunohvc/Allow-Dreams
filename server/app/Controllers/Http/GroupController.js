'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with groups
 */
class GroupController {
  /**
   * Show a list of all groups.
   * GET groups
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new group.
   * GET groups/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new group.
   * POST groups
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const group = new Groups()
    group.name = request.input('name')
    group.description = request.input('description')
    group.user_id = request.input('user_id')

    await group.save();

    return response.json(group);
  }

  /**
   * Display a single group.
   * GET groups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {
    let group = await Group.query('id',params.id).fetch()
    return response.json(group)
  }

  /**
   * Render a form to update an existing group.
   * GET groups/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update group details.
   * PUT or PATCH groups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    let group = await Group.find(params.id)

    group.name = request.input('name')
    group.description = request.input('description')

    return response.json(group)
  }

  /**
   * Delete a group with id.
   * DELETE groups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
    let group = await Group.find(params.id)

    group.status = false

    return response.json({message: 'Contact deleted!'})
  }
}

module.exports = GroupController
