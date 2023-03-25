import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    const uniquekey = 'email'

    await User.updateOrCreateMany(uniquekey, [
      {
        email: 'virk@adonisjs.com',
        password: 'admin',
      },
      {
        email: 'romain@adonisjs.com',
        password: 'admin',
      },
      {
        email: 'johnny@mangunza.com',
        password: 'admin',
      },
    ])
  }
}
