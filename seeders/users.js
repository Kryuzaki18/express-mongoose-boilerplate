'use strict'

const Users = require('../models/users')

const usersSeeders = {
  create: () => {
    const list = [
      {
        name: 'User1',
        email: 'user1@gmail.com',
        username: 'user1',
        password: 'user1',
        contact_number: ['09876543210'],
        address: 'askdjhaskjdhkashd',
        birth_date: new Date(),
        gender: 'male',
        occupation: 'asdasdsd',
        social_network: ['asdasdsd'],
        last_login: new Date(),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'User2',
        email: 'user2@gmail.com',
        username: 'user2',
        password: 'user2',
        contact_number: ['09876543210'],
        address: 'askdjhaskjdhkashd',
        birth_date: new Date(),
        gender: 'male',
        occupation: 'asdasdsd',
        social_network: ['asdasdsd'],
        last_login: new Date(),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]

    list.forEach(async (data) => {
      const users = await new Users(data)
      await users.save()
    })
  },
  drop: async () => {
    const users = await Users.find()
    if (users.length > 0) await Users.collection.drop()
  }
}

module.exports = usersSeeders
