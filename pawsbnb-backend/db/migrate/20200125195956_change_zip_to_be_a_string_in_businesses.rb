class ChangeZipToBeAStringInBusinesses < ActiveRecord::Migration[6.0]
  def change
    reversible do |change|
      change.up {change_column :businesses, :zip, :string}
      change.down {change_column :businesses, :zip, :integer}
    end
  end
end
