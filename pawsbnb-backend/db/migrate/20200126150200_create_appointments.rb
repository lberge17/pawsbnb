class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.string :title
      t.string :start
      t.string :end
      t.string :pets
      t.text :services
      t.text :medications
      t.text :details
      t.belongs_to :business
      t.belongs_to :client

      t.timestamps
    end
  end
end
