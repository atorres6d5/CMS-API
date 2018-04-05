const path = require('path')

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost:5432/cms_dev',
    migrations: {
      directory: path.join(__dirname, 'database', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'database', 'seeds')
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'cms_dev',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
        directory: path.join(__dirname, 'database', 'migrations')
      },
      seeds: {
        directory: path.join(__dirname, 'database', 'seeds')
      }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'cms_pro',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.join(__dirname, 'database', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'database', 'seeds')
    }
  }

};
