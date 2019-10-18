'use strict'

const Invoice = use('App/Models/Invoice')

class InvoiceController {
  /**
  * Show a list of all invoices.
  * GET invoices
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  * @param {View} ctx.view
  */
  async index ({ request, response, view }) {
  }
  
  /**
  * Render a form to be used for creating a new invoice.
  * GET invoices/create
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  * @param {View} ctx.view
  */
  async create ({ request, response, view }) {
  }
  
  /**
  * Create/save a new invoice.
  * POST invoices
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  */
  async store ({ request, response }) {
    const invoice = new Invoice()
    invoice.user_id = request.input('user_id')
    invoice.doc_number = request.input('doc_number')
    
    invoice.save()
    
    return response.json(invoice)
  }
  
  /**
  * Display a single invoice.
  * GET invoices/:id
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  * @param {View} ctx.view
  */
  async show ({ params, response }) {
    let invoice = await Invoice.query('id', params.id).fetch()
    return response.json(invoice)
  }
  
  /**
  * Render a form to update an existing invoice.
  * GET invoices/:id/edit
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  * @param {View} ctx.view
  */
  async edit ({ params, request, response, view }) {
  }
  
  /**
  * Update invoice details.
  * PUT or PATCH invoices/:id
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  */
  async update ({ params, request, response }) {
    let invoice = await Invoice.find(params.id)
    
    invoice.user_id = request.input('user_id')
    invoice.doc_number = request.input('doc_number')
    
    return response.json(invoice)
  }
  
  /**
  * Delete a invoice with id.
  * DELETE invoices/:id
  *
  * @param {object} ctx
  * @param {Request} ctx.request
  * @param {Response} ctx.response
  */
  async destroy ({ params, response }) {
    let invoice = await Invoice.find(params.id)
    
    invoice.status = 'deny';
    return response.json({messsage: 'Invoice deleted!'})
  }
}

module.exports = InvoiceController
