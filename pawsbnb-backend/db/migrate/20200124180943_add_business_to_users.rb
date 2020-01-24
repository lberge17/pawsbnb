class AddBusinessToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :business_id, :integer
  end
end