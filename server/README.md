# API Allow Dreams
  

## Setup

don't forget to make a .env file using the .env.example

How generate a key
```bash
1. $ adonis key:generate
```

You will need to have adonis command-cli
```bash
1. $ npm i -g @adonisjs/cli

```

You will need has a database on mysql after configure the .env, run the migrate

```bash
1. $ adonis migration:run
```

For run the server do:
```bash
1. $ adonis serve --dev
```

## AdonisJS
### Como usar a API

| Route | Method | Domain |
| -- | -- | -- |
| /api/v1/users | HEAD,GET  | Retorna todos os usuários cadastrados |
|/api/v1/users | POST | Cria um novo usuário |
| /api/v1/users/{id} | GET | Retorna o usuário da ID enviada |
| /api/v1/users/{id} | PUT | Edita o usuário do ID enviado |
| /api/v1/users/{id} | DELETE | Delete o usuário do ID enviado |
| /api/v1/users/login | POST | Ação de login, veja o item 1  |

#### 1 - Login
É necessário enviar um JSON via POST para a url /api/v1/users/login
Exemplo:

    {
	    "login": "nickname",
	    "password": "s3cr3t"
	}

Caso funcione ele retornará um JSON com o objeto do USER:

    {
	  "id": 1,
	  "name": "Jereba",
	  "nickname": "jereba",
	  "email": "jereba@gmail.com",
	  "birth_date": "1992-03-02T03:00:00.000Z",
	  "phone": "4899232222",
	  "password": "senha123",
	  "genre": "male",
	  "private_profile": 0,
	  "plan_id": 1,
	  "status": 1,
	  "created_at": "2019-10-31 19:23:16",
	  "updated_at": "2019-10-31 19:23:16"
	}
Caso o login ou senha estejam incorretos, irá retornar a seguinte mensagem:

    {
	  "message": "E-mail ou senha incorreta!"
	}
