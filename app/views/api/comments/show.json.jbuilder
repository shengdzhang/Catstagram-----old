json.extract!(
  @comment,
  :id, :body, :author_id, :author_name
)

json.comments do
  json.array!(@comment.comments) do |comment|
    json.extract!(
      comment,
      :id, :body, :author_id, :author_name
    )
  end
end
