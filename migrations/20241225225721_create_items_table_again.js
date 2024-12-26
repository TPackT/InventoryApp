/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function(knex) {
    await knex.schema.createTable("products", (table) => {
      table.increments('id')
      table.string('barcode')
      table.string('name').notNullable()
      table.string('size')
      table.string('description')
      table.integer('price')
      table.integer('quantity')
      table.integer('category_id')
      table.integer('created_at')
      table.integer('updated_at')
      
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export const down = async function(knex) {
    await knex.schema.dropTable("products")
  };
  