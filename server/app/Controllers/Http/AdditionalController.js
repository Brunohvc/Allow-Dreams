'use strict'

class AdditionalController {
  /**
  * Show a list of all additionals.
  * GET additionals
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  * @param {View} ctx.view
  */
  async index ({ request, response, view }) {
  }
  
  /**
  * Render a form to be used for creating a new additional.
  * GET additionals/create
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  * @param {View} ctx.view
  */
  async create ({ request, response, view }) {
  }
  
  /**
  * Create/save a new additional.
  * POST additionals
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  */
  async store ({ request, response }) {
    const additional = new Additional()
    additional.user_id = request.input('user_id')
    additional.doc_number = request.input('doc_number')
    
    additional.save()
    
    return response.json(additional)
  }
  
  /**
  * Display a single additional.
  * GET additionals/:id
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  * @param {View} ctx.view
  */
  async show ({ params, response }) {
    let additional = await Additional.query('id', params.id).fetch()
    return response.json(additional)
  }
  
  /**
  * Render a form to update an existing additional.
  * GET additionals/:id/edit
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  * @param {View} ctx.view
  */
  async edit ({ params, request, response, view }) {
  }
  
  /**
  * Update additional details.
  * PUT or PATCH additionals/:id
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  */
  async update ({ params, request, response }) {
    let additional = await Additional.find(params.id)
    
    additional.user_id = request.input('user_id')
    additional.doc_number = request.input('doc_number')
    
    return response.json(additional)
  }
  
  /**
  * Delete a additional with id.
  * DELETE additionals/:id
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  */
  async destroy ({ params, response }) {
    let additional = await Additional.find(params.id)
    
    additional.status = 'deny';
    return response.json({messsage: 'Additional deleted!'})
  }
}

module.exports = AdditionalController
