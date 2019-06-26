// This file is needed for the app to get and add information

const knex = require('knex');
const config = require('../knexfile'); // import knex object from the knex
const dbEnv = process.env.DB_ENV || 'development';


module.exports= knex(config[dbEnv]); //passes  knex config object to the knex function that accesses the database

