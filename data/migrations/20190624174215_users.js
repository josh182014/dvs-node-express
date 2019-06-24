exports.up = function (knex, Promise) {
    return knex.schema.createTable("users", tbl => {
        tbl.increments();  //id

        tbl
            .string("username", 128)  //username
            .notNullable()
            .unique();

        tbl
            .string("password", 128) //password 
            .notNullable()
            .unique();

        tbl
            .boolean("fullname") //full name 
            .notNullable()
            .defaultTo(false);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("users");
};