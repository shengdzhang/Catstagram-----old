class AddLink < ActiveRecord::Migration
  def change
    add_column :media, :link, :string, null: false
    add_column :media, :extension, :string
  end
end
