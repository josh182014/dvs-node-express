exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, name: "wife" },
        { id: 2, name: "husband" },
        { id: 3, name: "friend" }
      ]);
    });
};
