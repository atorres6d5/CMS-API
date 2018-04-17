
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orginization').del()
    .then(function () {
      // Inserts seed entries
      return knex('orginization').insert([
        {id: 1, name: 'Griffindoor'},
        {id: 2, name: 'Ravenclaw'},
        {id: 3, name: 'Hufflepuff'},
        {id: 4, name: 'Slytheryn'}
      ]);
    });
};
