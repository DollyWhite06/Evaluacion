import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import Post from 'App/Models/Post'
import Comment from 'App/Models/Comment'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
     
      await Comment.createMany([
        {
          user_id:1,
          post_id: 1,
          content: "Te amo"
        
        },
          {
            user_id:2,
          post_id: 2,
          content: "Te amo"
          },
      ])
    }
  }


