import type { Knex } from 'knex'

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './server/db/migrations',
    },
    seeds: {
      directory: './server/db/seeds',
    },
  },
}

export default config
