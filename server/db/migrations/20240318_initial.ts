import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('username').notNullable().unique()
    table.string('email').notNullable().unique()
    table.string('password_hash').notNullable()
    table.timestamps(true, true)
  })

  await knex.schema.createTable('categories', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('icon_url')
  })

  await knex.schema.createTable('challenges', (table) => {
    table.increments('id').primary()
    table.string('title').notNullable()
    table.text('description')
    table.integer('duration_days').notNullable()
    table.integer('category_id').references('categories.id')
    table.integer('creator_id').references('users.id')
    table.string('image_url')
    table.boolean('is_public').defaultTo(false)
    table.timestamps(true, true)
  })

  await knex.schema.createTable('objectives', (table) => {
    table.increments('id').primary()
    table.integer('challenge_id').references('challenges.id')
    table.string('description').notNullable()
    table.boolean('completed').defaultTo(false)
  })

  await knex.schema.createTable('user_challenges', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.integer('challenge_id').references('challenges.id')
    table.integer('points').defaultTo(0)
    table.string('level').defaultTo('beginner')
    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('user_challenges')
  await knex.schema.dropTableIfExists('objectives')
  await knex.schema.dropTableIfExists('challenges')
  await knex.schema.dropTableIfExists('categories')
  await knex.schema.dropTableIfExists('users')
}
