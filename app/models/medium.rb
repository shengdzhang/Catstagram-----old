class Medium < ActiveRecord::Base
  validates :title, :link, :author_id, presence: true

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :author_id
  )
end
