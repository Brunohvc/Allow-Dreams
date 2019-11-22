'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/**
 * Resourceful controller for interacting with users
 */
const Post = use('App/Models/Post')

/**
 * Resourceful controller for interacting with posts
 */
class PostController {
  /**
   * Show a list of all posts.
   * GET posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ response }) {
    let posts = await Post.query().fetch()
    return response.json(posts)
  }

  /**
   * Create/save a new post.
   * POST posts
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
   * GET posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    let post = await Post.query('id', params.id).fetch()
    return response.json(post)
  }

  /**
   * Display a single post.
   * GET posts/feed/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async feed({ params, request, response, view }) {
    let posts = await Post.query().whereIn('user_id', [params.id]).fetch()
    return response.json(posts)
  }

  /**
   * Render a form to update an existing post.
   * GET posts/:id/edit
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
   * PUT or PATCH posts/:id
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
   * DELETE posts/:id
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
