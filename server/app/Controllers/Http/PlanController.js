'use strict'

const Plan = use('App/Models/Plan');

class PlanController {
  /**
  * Show a list of all plans.
  * GET plans
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  * @param {View} ctx.view
  */
  async index ({ request, response, view }) {
  }
  
  /**
  * Render a form to be used for creating a new plan.
  * GET plans/create
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  * @param {View} ctx.view
  */
  async create ({ request, response, view }) {
  }
  
  /**
  * Create/save a new plan.
  * POST plans
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  */
  async store ({ request, response }) {
    const plan = new Plan()
    plan.name = request.input('name')
    plan.value = request.input('value')
    plan.description = request.input('description')
    plan.status = request.input('status')
    
    plan.save()
    
    return response.json(plan)
  }
  
  /**
  * Display a single plan.
  * GET plans/:id
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  * @param {View} ctx.view
  */
  async show ({ params, response }) {
    let plan = await Plan.query('id', params.id).fetch()
    return response.json(plan)
  }
  
  /**
  * Render a form to update an existing plan.
  * GET plans/:id/edit
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  * @param {View} ctx.view
  */
  async edit ({ params, request, response, view }) {
  }
  
  /**
  * Update plan details.
  * PUT or PATCH plans/:id
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  */
  async update ({ params, request, response }) {
    let plan = await Plan.find(params.id)
    
    plan.name = request.input('name')
    plan.value = request.input('value')
    plan.description = request.input('description')
    plan.status = request.input('status')
    
    return response.json(plan)
  }
  
  /**
  * Delete a plan with id.
  * DELETE plans/:id
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  */
  async destroy ({ params, response }) {
    let plan = await Plan.find(params.id)
    
    plan.status = 'deny';
    return response.json({messsage: 'Plan deleted!'})
  }
}

module.exports = PlanController
