exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          firstName: "Xenia",
          lastName: "Brown",
          username: "xbrown",
          password: "password",
          email: "something1@email.com"
        },
        {
          firstName: "Braden",
          lastName: "Jeffers",
          username: "bjeffers",
          password: "password",
          email: "something2@email.com"
        },
        {
          firstName: "Zamia",
          lastName: "Johnson",
          username: "zjohnson",
          password: "password",
          email: "something3@email.com"
        }
      ]);
    });
};
