'use strict'

const { test, trait } = use('Test/Suite')('User')
const Post = use('App/Models/User')

trait('Test/ApiClient')

test('verificar se usuário está cadastrado', async ({ client }) => {
  let user = {
    name: 'Gabriel Zanghelini',
    email: 'zanghelinigab@gmail.com',
    nickname: 'zangs',
    birth_date: new Date(1998, 10, 23),
    phone: '999999999',
    password: '123',
    genre: 'M',
    private_profile: '',
    plan_id: 1
  }

  // await Post.create(user)

  const response = client.get('../test_database/Users.json').end()

  console.log(response)
  response.assertJSONSubset({
    name: 'Gabriel Zanghelini',
    email: 'zanghelinigab@gmail.com'
  })
})
