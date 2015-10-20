class Comment < ActiveRecord::Base
  validates :body, :author_id, :commentable_id, :commentable_type, presence: true;

  belongs_to :commentable, polymorphic: true

  has_many :comments, as: :commentable

  belongs_to(
   :user,
   class_name: "User",
   foreign_key: :author_id
  )
end
