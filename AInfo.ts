import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    const trx = await Database.transaction()
     {
      await User.createMany([
        {
          nombre:'Kiara',
          apellido: 'Barrientos',
          color: 'naranja',
          apodo: 'kikiriki',
          email: 'kiki@gmail.com',
          password: 'holisbolis',
        },
          {
            nombre:'Anahi',
            apellido: 'Alvarez',
            color: 'morado',
            apodo: 'Any',
            email: 'any@gmail.com',
            password: 'holaany',
          },
      ],trx)
    }
  }
}


