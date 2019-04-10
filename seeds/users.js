exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          name: "Henry Miller",
          about: "Loves watching over the roofs of Paris.",
          email_address: "henrymiller@.com",
          contact_details: "001",
          image: ""
        },
        {
          id: 2,
          name: "Fyodor Dostoevsky",
          about: "Interested in religion, free-will, morality and nihilism.",
          email_address: "fyodordostoevsky@.com",
          contact_details: "002",
          image: ""
        },
        {
          id: 3,
          name: "Albert Camus",
          about: "Enjoys cigarettes, football, coffee.",
          email_address: "albertcamus@.com",
          contact_details: "003",
          image: ""
        }
      ]);
    });
};
