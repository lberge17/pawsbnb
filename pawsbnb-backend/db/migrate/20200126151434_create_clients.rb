class CreateClients < ActiveRecord::Migration[6.0]
  def change
    create_table :clients do |t|
      t.string :name
      t.string :phone
      t.string :email
      t.string :emergency_contact
      t.string :address
      t.belongs_to :business

      t.timestamps
    end
  end
end
