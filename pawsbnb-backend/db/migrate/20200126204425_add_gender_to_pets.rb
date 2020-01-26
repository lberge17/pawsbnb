class AddGenderToPets < ActiveRecord::Migration[6.0]
  def change
    add_column :pets, :gender, :string
  end
end
