'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const name = 'users'

const usersSchema = new Schema(
  {
    avatar: String,
    name: { type: String, required: true, maxlength: 100 },
    email: { type: String, required: true, unique: true, maxlength: 100 },
    username: { type: String, required: true, unique: true, maxlength: 50 },
    password: { type: String, required: true },
    contact_number: [],
    address: { type: String, maxlength: 150 },
    birth_date: Date,
    gender: { type: String, maxlength: 7, lowercase: true },
    occupation: { type: String, maxlength: 50 },
    social_network: [],
    last_login: Date
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)

module.exports = mongoose.model(name, usersSchema, name)
