class CreateMedia < ActiveRecord::Migration
  def change
    create_table :media do |t|
      t.string :title, null: false
      t.text :description
      t.integer :author_id, null: false
      t.has_attached_file :video
      t.integer :commentable_id
      t.string :commentable_type
      t.timestamps null: false
    end
    add_index :media, :author_id
    add_index :media, :commentable_id
  end
end
