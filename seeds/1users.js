
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'Bishal',
          email: 'bishal@gmail.com',
          friend: 'sean'
        },
        {
          id: 2,
          username: 'Brian',
          email: 'brian@gmail.com',
          friend: 'bishal'
        },
        {
          id: 3,
          username: 'Sean',
          email: 'sean@gmail.com',
          friend: 'brian'
        }
      ])
    })
    .then(function() {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));")
    });
};
