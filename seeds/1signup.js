
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('signup').del()
    .then(function() {
      // Inserts seed entries
      return knex('signup').insert([
        {
          uuid: '110ec58a-a0f2-4ac4-8393-c866d813b8d1',
          username: 'Bishal',
          email: 'bishal@gmial.com',
          password: 'bishal',
          DOB: '08 August, 1988',
          question: 'What is your pet name?',
          answer: 'bishal'
        },
        {
          uuid: '110ec58a-a0f2-4ac4-8393-c966d813b8d1',
          username: 'Brian',
          email: 'briana@gmial.com',
          password: 'brian',
          DOB: '08 August, 1988',
          question: 'What is your pet name?',
          answer: 'brian'
        },
        {
          uuid: '110ec58a-a0f2-4ac4-8392-c866d813b8d1',
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
