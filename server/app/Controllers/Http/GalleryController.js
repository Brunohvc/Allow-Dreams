'use strict'

const Gallery = use('App/Models/Gallery')

class GalleryController {
  /**
  * Show a list of all gallerys.
  * GET gallerys
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  * @param {View} ctx.view
  */
  async index ({ request, response, view }) {
  }
  
  /**
  * Render a form to be used for creating a new gallery.
  * GET gallerys/create
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  * @param {View} ctx.view
  */
  async create ({ request, response, view }) {
  }
  
  /**
  * Create/save a new gallery.
  * POST gallerys
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  */
  async store ({ request, response }) {
    const gallery = new Gallery()
    gallery.user_id = request.input('user_id')
    gallery.name = request.input('name')
    gallery.description = request.input('description')
    
    gallery.save()
    
    return response.json(gallery)
  }
  
  /**
  * Display a single gallery.
  * GET gallerys/:id
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  * @param {View} ctx.view
  */
  async show ({ params, response }) {
    let gallery = await Benefit.query('id', params.id).fetch()
    return response.json(gallery)
  }
  
  /**
  * Render a form to update an existing gallery.
  * GET gallerys/:id/edit
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  * @param {View} ctx.view
  */
  async edit ({ params, request, response, view }) {
  }
  
  /**
  * Update gallery details.
  * PUT or PATCH gallerys/:id
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  */
  async update ({ params, request, response }) {
    let gallery = await Benefit.find(params.id)
    
    gallery.user_id = request.input('user_id')
    gallery.name = request.input('name')
    gallery.description = request.input('description')
    
    return response.json(gallery)
  }
  
  /**
  * Delete a gallery with id.
  * DELETE gallerys/:id
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  */
  async destroy ({ params, response }) {
    let gallery = await Benefit.find(params.id)
    
    gallery.status = 'deny';
    return response.json({messsage: 'Benefit deleted!'})
  }
}

module.exports = GalleryController
