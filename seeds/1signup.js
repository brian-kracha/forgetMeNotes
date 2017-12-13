
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('signup').del()
    .then(function() {
      // Inserts seed entries
      return knex('signup').insert([
        {
          id: 1,
          username: 'Bishal',
          email: 'bishal@gmial.com',
          password: 'bishal',
          DOB: '08 August, 1988',
          question: 'What is your pet name?',
          answer: 'bishal'
        },
        {
          id: 2,
          username: 'Brian',
          email: 'briana@gmial.com',
          password: 'brian',
          DOB: '08 August, 1988',
          question: 'What is your pet name?',
          answer: 'brian'
        },
        {
          id: 3,
          username: 'Sean',
          email: 'sean@gmial.com',
          password: 'sean',
          DOB: '08 August, 1988',
          question: 'What is your pet name?',
          answer: 'sean'
        }
      ])
    })
    .then(function() {
      return knex.raw("SELECT setval('signup_id_seq', (SELECT MAX(id) FROM signup));")
    })
};
