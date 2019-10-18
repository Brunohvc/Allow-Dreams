'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/**
 * Resourceful controller for interacting with users
 */
const User = use('App/Models/User');

class UserController {
    

    /**
    * Show a list of all users.
    * GET users
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    * @param {View} ctx.view
    */
    async index ({ response }) {
        let users = await User.query().fetch()
        return response.json(users)
    }


    /**
    * Render a form to be used for creating a new user.
    * GET users/create
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    * @param {View} ctx.view
    */
    async create ({ request, response, view }) {
    }


    /**
    * Create/save a new user.
    * POST users
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    */
    async store ({ request, response }) {

        const name = request.input('name')
        const email = request.input('email')
        const birth_date = request.input('birth_date')
        const phone = request.input('phone')
        const password = request.input('password')
        const genre = request.input('genre')
        const private_profile = request.input('private_profile')
        const plan_id = request.input('plan_id')

        const user = new User()
        user.name = name
        user.email = email
        user.birth_date = birth_date
        user.phone = phone
        user.password = password
        user.genre = genre
        user.private_profile = private_profile
        user.plan_id = plan_id

        await user.save()
        return response.json(user)
    }


    /**
    * Display a single user.
    * GET users/:id
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    * @param {View} ctx.view
    */
    async show ({ params, response }) {
        let user = await User.query('id',params.id).fetch()
        return response.json(user)
    }


    /**
    * Render a form to update an existing user.
    * GET users/:id/edit
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    * @param {View} ctx.view
    */
    async edit ({ params, request, response, view }) {
    }


    /**
    * Update user details.
    * PUT or PATCH users/:id
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    */
    async update ({ params, request, response }) {
        const name = request.input('name')
        const email = request.input('email')
        const birth_date = request.input('birth_date')
        const phone = request.input('phone')
        const password = request.input('password')
        const genre = request.input('genre')
        const private_profile = request.input('private_profile')
        const plan_id = request.input('plan_id')

        let user = await User.find(params.id)

        user.name = name
        user.email = email
        user.phone = phone
        user.birth_date = birth_date
        user.password = password
        user.genre = genre
        user.private_profile = private_profile
        user.plan_id = plan_id
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
    async destroy ({ params, request, response }) {
        
        let user = await User.find(params.id)

        user.status = false

        return response.json({message: 'Contact deleted!'})
    }
}

module.exports = UserController
