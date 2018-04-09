exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del().then(function() {
    // Inserts seed entries
    return knex('users').insert([
      {
        id: 1,
        name: 'Harry Potter',
        username: 'firebolt_Rider007',
        password: '$2a$10$NQZqoM/r6Ra3pG4BtP9g9.QkHkqF5xp/60odgitzFfHlBMs8s5GtW',
        org: 'griffindor',
        admin: true
      }, {
        id: 2,
        name: 'Katie Bell',
        username: 'fastest_Chaser',
        password: '$2a$10$NQZqoM/r6Ra3pG4BtP9g9.QkHkqF5xp/60odgitzFfHlBMs8s5GtW',
        org: 'griffindor',
        admin: false
      }, {
        id: 3,
        name: 'Ginny Weasley',
        username: "fire_flyer",
        password: '$2a$10$NQZqoM/r6Ra3pG4BtP9g9.QkHkqF5xp/60odgitzFfHlBMs8s5GtW',
        org: 'griffindor',
        admin: false
      }, {
        id:4,
        name: 'Draco Malfoy',
        username: 'Bad_boy_2001',
        password: '$2a$10$NQZqoM/r6Ra3pG4BtP9g9.QkHkqF5xp/60odgitzFfHlBMs8s5GtW',
        org:'slythern',
        admin:true
      }
    ])
  })
  .then(() => {
      return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`)
    })
};
