'use strict'

const Image = use('App/Models/Image')

class ImageController {
  /**
  * Show a list of all images.
  * GET images
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  * @param {View} ctx.view
  */
  async index ({ request, response, view }) {
  }
  
  /**
  * Render a form to be used for creating a new image.
  * GET images/create
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  * @param {View} ctx.view
  */
  async create ({ request, response, view }) {
  }
  
  /**
  * Create/save a new image.
  * POST images
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  */
  async store ({ request, response }) {
    const image = new Image()
    image.gallery_id = request.input('gallery_id')
    image.user_id = request.input('user_id')
    image.path = request.input('path')
    
    image.save()
    
    return response.json(image)
  }
  
  /**
  * Display a single image.
  * GET images/:id
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  * @param {View} ctx.view
  */
  async show ({ params, response }) {
    let image = await Benefit.query('id', params.id).fetch()
    return response.json(image)
  }
  
  /**
  * Render a form to update an existing image.
  * GET images/:id/edit
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  * @param {View} ctx.view
  */
  async edit ({ params, request, response, view }) {
  }
  
  /**
  * Update image details.
  * PUT or PATCH images/:id
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  */
  async update ({ params, request, response }) {
    let image = await Benefit.find(params.id)
    
    image.gallery_id = request.input('gallery_id')
    image.user_id = request.input('user_id')
    image.path = request.input('path')
    
    return response.json(image)
  }
  
  /**
  * Delete a image with id.
  * DELETE images/:id
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  */
  async destroy ({ params, response }) {
    let image = await Benefit.find(params.id)
    
    image.status = 'deny';
    return response.json({messsage: 'Benefit deleted!'})
  }
}

module.exports = ImageController
