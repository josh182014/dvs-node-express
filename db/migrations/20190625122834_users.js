
//TABLE

exports.up = function (knex, Promise) {
    return knex.schema.createTable("users", tbl => { //Table name 
        tbl.increments();  //ID

        tbl
            .string("username", 128)  //username
            .notNullable()
            .unique();

        tbl
            .string("password", 128) //password 
            .notNullable()
            

        tbl
            .string("firstName") //full name 
            .notNullable();

        tbl
            .string("lastName") //last  name 
            .notNullable();

        
        tbl
            .string("email") //email 
            .notNullable()
            .unique();


    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("users");
};