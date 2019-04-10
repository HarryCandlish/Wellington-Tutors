exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("tutors")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tutors").insert([
        {
          id: 1,
          user_id: 2,
          tech_id: 3,
          name: "Friedrich Nietzsche",
          about: "Like animals.",
          email_address: "friedrichnietzsche@.com",
          contact_details: "004",
          image: ""
        },
        {
          id: 2,
          user_id: 1,
          tech_id: 1,
          name: "Carl Jung",
          about: "Enjoys mythology.",
          email_address: "carljung@.com",
          contact_details: "005",
          image: ""
        },
        {
          id: 3,
          user_id: 3,
          tech_id: 2,
          name: "John Fante",
          about: "lying under the palm trees.",
          email_address: "johnfante@.com",
          contact_details: "006",
          image: ""
        }
      ]);
    });
};
