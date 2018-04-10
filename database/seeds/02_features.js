exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('features').del().then(function() {
    // Inserts seed entries
    return knex('features').insert([
      {
        id: 1,
        data: {
          'name': 'Get',
          'description': "ask for the info you need at an address",
          'markdown':"Markdown info goes here",
          'tags':['what', 'who', 'when', 'where', 'how']
        }
      }, {
        id: 2,
        data: 'rowValue2'
      }, {
        id: 3,
        data: 'rowValue3'
      }
    ]);
  });
};
