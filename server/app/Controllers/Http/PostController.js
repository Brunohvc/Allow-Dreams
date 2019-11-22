'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/**
 * Resourceful controller for interacting with users
 */
const Post = use('App/Models/Post')
const Follower = use('App/Models/Follower')

/**
 * Resourceful controller for interacting with post
 */
class PostController {
  /**
   * Show a list of all post.
   * GET post
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ response }) {
    console.log("index")
    let post = await Post.query().fetch()
    return response.json(post)
  }

  /**
   * Create/save a new post.
   * POST post
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {

    console.log("Entrou")

    const post = new Post();
    post.title = request.input('title')
    post.description = request.input('description')
    post.post_content = request.input('post_content')
    post.group_id = request.input('group_id')
    post.user_id = request.input('user_id')
    post.type = request.input('type')
    post.references_id = request.input('references_id')

    post.save()

    return response.json(post)
  }

  /**
   * Display a single post.
   * GET post/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ request, response }) {
    console.log("byid")
    let post = await Post.query('id', params.id).fetch()
    return response.json(post)
  }

  /**
   * Display a single post.
   * GET post/feed/
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async feed({ params, request, response, view }) {

    let user_id = request.input('user_id')
    let page = request.input('page')

    let following = await Follower.query().select('user_id_follower').where('user_id_followed_by', user_id).fetch()

    let followingIds = following.rows.map(function (element) {
      return element.user_id_follower;
    })

    followingIds.push(user_id)

    let post = await Post.query().whereIn('user_id', followingIds).forPage(page, 15).fetch()
    return response.json(post)
  }

  /**
   * Render a form to update an existing post.
   * GET post/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update post details.
   * PUT or PATCH post/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    let post = await Post.find(param.id)

    post.title = request.input('title')
    post.description = request.input('description')
    post.post_content = request.input('post_content')
    post.group_id = request.input('group_id')
    post.user_id = request.input('user_id')
    post.type = request.input('type')
    post.references_id = request.input('references_id')

    return response.json(post)
  }

  /**
   * Delete a post with id.
   * DELETE post/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    let post = await Post.find(params.id)

    post.status = false

    return response.json({ message: 'Post deleted!' })
  }
}

module.exports = PostController
