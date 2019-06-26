// // This file is needed for the app to get and add information

// const knex = require('knex');
// const knexConfig = require('../knexfile'); // import knex object from the knex
// const dbEnv = process.env.DB_ENV || 'development'


// const db = knex(knex(Config.[dbEnv]); //passes  knex config object to the knex function that accesses the database


module.exports = {
    add,
    findBy,
    findById
};

async function add(user) {
    const [id] = await db("users").insert(user);
    return findById(id);
}

function findBy(filter) {
    return db("users").where(filter);
}

function findById(id) {
    return db("users")
        .where({ id })
        .first();
}
