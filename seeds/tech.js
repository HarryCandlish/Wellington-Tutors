exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("tech")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tech").insert([
        {
          id: 1,
          technology: "JavaScript",
          description: "",
          image: ""
        },
        {
          id: 2,
          technology: "React and Redux",
          description: "",
          image: ""
        },
        {
          id: 3,
          technology: "HTML CSS",
          description: "",
          image: ""
        }
      ]);
    });
};
