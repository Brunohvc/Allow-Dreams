'use strict'

const Benefit = use ('App/Models/Benefit')

class BenefitController {
  /**
   * Show a list of all benefits.
   * GET benefits
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new benefit.
   * GET benefits/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new benefit.
   * POST benefits
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  const benefit = new Benefit()
    benefit.name = request.input('name')
    benefit.description = request.input('description')
    benefit.status = request.input('status')

    benefit.save()

    return response.json(benefit)
  }

  /**
   * Display a single benefit.
   * GET benefits/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {
    let benefit = await Benefit.query('id', params.id).fetch()
    return response.json(benefit)
  }

  /**
   * Render a form to update an existing benefit.
   * GET benefits/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update benefit details.
   * PUT or PATCH benefits/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let benefit = await Benefit.find(params.id)

    benefit.name = request.input('name')
    benefit.description = request.input('description')
    benefit.status = request.input('status')

    return response.json(benefit)
  }

  /**
   * Delete a benefit with id.
   * DELETE benefits/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
    let benefit = await Benefit.find(params.id)

    benefit.status = 'deny';
    return response.json({messsage: 'Benefit deleted!'})
  }
}

module.exports = BenefitController
