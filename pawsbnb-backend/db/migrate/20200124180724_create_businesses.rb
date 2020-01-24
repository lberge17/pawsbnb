class CreateBusinesses < ActiveRecord::Migration[6.0]
  def change
    create_table :businesses do |t|
      t.string :title
      t.text :description
      t.string :location
      t.integer :zip
      t.text :services
      t.string :phone
      t.string :email
      t.string :website
      t.belongs_to :user

      t.timestamps
    end
  end
end
