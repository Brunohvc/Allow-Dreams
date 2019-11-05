'use strict'

const { test, trait } = use('Test/Suite')('Post')
const Post = use('App/Models/Post')

trait('Test/ApiClient')

test('garantir que post foi criado', async ({ assert, client }) => {
  let data = {
    title: 'Publicação teste',
    description: 'Descrição blápspspspsps',
    post_content: 'Conteúdo',
    group_id: 1,
    user_id: 1,
    type: 'post',
    references_id: 1
  }

  await Post.create(data)

  const response = await client.get('/api/v1/posts').end()

  response.assertStatus(200)
  response.assertJSONSubset([{
    title: 'Publicação teste',
    description: 'Descrição blápspspspsps',
    post_content: 'Conteúdo'
  }])
}).timeout(0)
