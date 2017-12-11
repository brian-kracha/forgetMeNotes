
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('signin').del()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1,
          email: 'bishal@gmail.com',
          password: 'bishal'
        },
        {
          id: 2,
          email: 'sean@gmail.com',
          password: 'sean'
        },
        {
          id: 3,
          email: 'brian@gmail.com',
          password: 'brian'
        }
      ]);
    });
};
