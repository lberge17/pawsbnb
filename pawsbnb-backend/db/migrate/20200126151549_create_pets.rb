class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :breed
      t.text :concerns
      t.string :birthdate
      t.string :weight
      t.belongs_to :client

      t.timestamps
    end
  end
end
