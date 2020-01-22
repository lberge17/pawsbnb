class CreateDogs < ActiveRecord::Migration[6.0]
  def change
    create_table :dogs do |t|
      t.string :breed
      t.string :name
      t.integer :weight
      t.integer :age
      t.integer :owner_id

      t.timestamps
    end
  end
end
