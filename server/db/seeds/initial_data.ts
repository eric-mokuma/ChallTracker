import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Clear existing entries
  await knex('categories').del()

  // Insert seed entries
  await knex('categories').insert([
    { name: 'Sport', icon_url: '/icons/sport.svg' },
    { name: 'Learning', icon_url: '/icons/learning.svg' },
    { name: 'Reading', icon_url: '/icons/reading.svg' },
    { name: 'Health', icon_url: '/icons/health.svg' },
  ])
}
