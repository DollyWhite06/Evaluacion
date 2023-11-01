import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { HttpContext } from '@adonisjs/core/build/standalone'
import User from 'App/Models/User'
import Post from 'App/Models/Post'
import Comment from 'App/Models/Comment'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

//export default class LogicasController { public async getData(ctx: HttpContextContract){ const users = await User.all()
// return users.map((user) => user.toJSON()) }}



export default class LogicasController{
    public async data({response},ctx: HttpContext){
        const users = await User
        .query()
        .preload('post', (postQuery) => {
          postQuery.preload('comment')
        })
        return response.ok(users) 
    }

    public async method({request, response})
    {
        return response.ok(request.method());
    }

    public async allMethods({request, params,response}){
      const method = request.method()
      switch(method)
      {
        case "GET":
          const id = params.id
          const usuario: any = await User.find(id)
          if (!usuario) {
              return response.notFound({ message: 'Usuario no encontrado' })
          }
          return response.ok(usuario)
        break;

        case "POST":
          const userSchema = schema.create({
            nombre: schema.string({ trim: true }, [
                rules.maxLength(30)
            ]),
            apellido: schema.string({ escape: true }, [
                rules.maxLength(50)
            ]),
            color: schema.string({ escape: true }, [
              rules.maxLength(50)
          ]),
          apodo: schema.string({ escape: true }, [
            rules.maxLength(50)
        ]),
            email: schema.string({ escape: true }, [
              rules.maxLength(40)
            ]),
            password: schema.string({ escape: true }, [
              rules.minLength(8)
          ])
          })

          const info: any = await request.validate({ schema: userSchema })
          const user: User = await User.create(info)
          return response.ok(user)
        break;

        case "PUT":
          const usersSchema = schema.create({
            nombre: schema.string({ trim: true }, [
                rules.maxLength(30)
            ]),
            apellido: schema.string({ escape: true }, [
                rules.maxLength(50)
            ]),
            color: schema.string({ escape: true }, [
              rules.maxLength(50)
          ]),
          apodo: schema.string({ escape: true }, [
            rules.maxLength(50)
        ]),
            email: schema.string({ escape: true }, [
              rules.maxLength(40), rules.nullable()
            ]),
            password: schema.string({ escape: true }, [
              rules.minLength(8), rules.nullable()
          ])
          })

          const val: any = await request.validate({ schema: usersSchema })

          const id_user= params.id
          const user_id: any = await User.find(id_user)

          if (!user_id) {
            return response.notFound({ message: 'Usuario no encontrado' })
           }

           user_id.nombre = val.nombre
           user_id.apellido = val.apellido
           user_id.color = val.color
           user_id.apodo = val.apodo
           user_id.email=val.email
           user_id.password=val.password

           await user_id.save()


           return response.ok(user_id)
        break;

        case "DELETE":
          const id_des= params.id
          const user_des: any = await User.find(id_des)

          if (!user_des) {
            return response.notFound({ message: 'Usuario no encontrado' })
           }

           await user_des.delete()

           return response.ok({ message: 'Usuario eliminado con éxito!!!' })
        break;
      }
    }
}

