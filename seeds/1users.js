
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'Bishal',
          email: 'bishal@gmail.com',
          friend: 'sean',
          user_id: '110ec58a-a0f2-4ac4-8393-c866d813b8d1'
        },
        {
          id: 2,
          username: 'Brian',
          email: 'brian@gmail.com',
          friend: 'bishal',
          user_id: '110ec58a-a0f2-4ac4-8393-c966d813b8d1'
        },
        {
          id: 3,
          username: 'Sean',
          email: 'sean@gmail.com',
          friend: 'brian',
          user_id: '110ec58a-a0f2-4ac4-8392-c866d813b8d1'
        }
      ])
    })
    .then(function() {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));")
    });
};
