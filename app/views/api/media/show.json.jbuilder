json.extract!(
  @medium,
  :id, :title, :description, :author_id, :link
)

json.comments do
  json.array!(@medium.likes) do |like|
    json.extract!(
      like,
      :id, :user_id, :media_id
    )
  end
end
