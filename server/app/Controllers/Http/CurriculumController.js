'use strict'

const Curriculum = use('App/Models/Curriculum')

class CurriculumController {
  
  /**
  * Create/save a new curriculum.
  * POST curriculums
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  */
  async store ({ request, response }) {
    const curriculum = new Curriculum()
    curriculum.user_id = request.input('user_id')
    curriculum.doc_number = request.input('doc_number')
    
    curriculum.save()
    
    return response.json(curriculum)
  }
  
  /**
  * Display a single curriculum.
  * GET curriculums/:id
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  * @param {View} ctx.view
  */
  async show ({ params, response }) {
    let curriculum = await Curriculum.query('id', params.id).fetch()
    return response.json(curriculum)
  }
  
  /**
  * Update curriculum details.
  * PUT or PATCH curriculums/:id
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  */
  async update ({ params, request, response }) {
    let curriculum = await Curriculum.find(params.id)
    
    curriculum.user_id = request.input('user_id')
    curriculum.doc_number = request.input('doc_number')
    
    return response.json(curriculum)
  }
  
  /**
  * Delete a curriculum with id.
  * DELETE curriculums/:id
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  */
  async destroy ({ params, response }) {
    let curriculum = await Curriculum.find(params.id)
    
    curriculum.status = 'deny';
    return response.json({messsage: 'Curriculum deleted!'})
  }
}

module.exports = CurriculumController
