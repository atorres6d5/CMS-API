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
          'markdown': "Markdown info goes here",
          'tags': [
            'what', 'who', 'when', 'where', 'how'
          ],
          'category': 'Development'
        },
        orgID: 1
      }, {
        id: 2,
        data: {
          'name': 'Post',
          'description': "ask for the info you need at an address",
          'markdown': "Markdown info goes here",
          'tags': [
            'what', 'who', 'when', 'where', 'how'
          ],
          'category': 'Development'
        },
        orgID: 1
      }, {
        id: 3,
        data: {
          'name': 'Patch',
          'description': "ask for the info you need at an address",
          'markdown': "Markdown info goes here",
          'tags': [
            'what', 'who', 'when', 'where', 'how'
          ],
          'category': 'Development'
        },
        orgID: 4
      }
    ]);
  });
};
