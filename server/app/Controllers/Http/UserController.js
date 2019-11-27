'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/**
 * Resourceful controller for interacting with users
 */
const User = use('App/Models/User');
const Follower = use('App/Models/Follower');

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
    async index({ response }) {
        let users = await User.query().fetch()
        return response.json(users)
    }

    async login({ request, response }) {
        const login = request.input('login')
        const password = request.input('password')
        let user = await User.findBy('nickname', `${login}`)
        if (user.password == password) {
            return user
        }
        else {
            return response.json({ message: 'Login ou senha incorreta!' })
        }
    }


    /**
    * Create/save a new user.
    * POST users
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    */
    async store({ request, response }) {

        const name = request.input('name')
        const phone = request.input('phone')
        const nickname = request.input('nickname')
        const password = request.input('password')
        const birth_date = null
        const email = null
        const genre = null;
        const private_profile = false;
        const plan_id = null

        let otherUser = await User.findBy('nickname', `${nickname}`)
        if (!otherUser) {

            const user = new User()
            user.name = name
            user.email = email
            user.nickname = nickname
            user.birth_date = birth_date
            user.phone = phone
            user.password = password
            user.genre = genre
            user.private_profile = private_profile
            user.plan_id = plan_id

            await user.save()
            return response.json(user)

        } else {
            return response.json({ message: 'O login escolhido já está em uso!' })
        }
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
    async show({ params, response }) {
        let user = await User.findBy('id', `${params.id}`)
        return response.json(user)
    }


    /**
    * Display a single user.
    * POST users/verificaRelacionamento
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    * @param {View} ctx.view
    */
    async verificaRelacionamento({ params, response }) {
        //Follower

        let userPageId = request.input('userPageId')
        let userId = request.input('userId')
        let user = await User.findBy('id', `${userPageId}`)
        let follower = null;

        if (userPageId != userId)
            follower = true;


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
    async edit({ params, request, response, view }) {
    }


    /**
    * Update user details.
    * PUT or PATCH users/:id
    *
    * @param {object} ctx
    * @param {Request} ctx.request
    * @param {Response} ctx.response
    */
    async update({ params, request, response }) {
        const name = request.input('name')
        const email = request.input('email')
        const nickname = request.input('nickname')
        const birth_date = request.input('birth_date')
        const phone = request.input('phone')
        const password = request.input('password')
        const genre = request.input('genre')
        const private_profile = request.input('private_profile')
        const plan_id = request.input('plan_id')

        let user = await User.find(params.id)

        user.name = name
        user.email = email
        user.nickname = nickname
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
    async destroy({ params, request, response }) {

        let user = await User.find(params.id)

        user.status = false

        return response.json({ message: 'Contact deleted!' })
    }
}

module.exports = UserController
