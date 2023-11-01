import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Post from 'App/Models/Post'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
       
    await Post.createMany([
      {
        user_id:1,
        content: "Te amo"
      
      },
        {
          user_id:2,
        content: "Te amo"
        },
    ])
  }
}
  