json.extract!(
  @comment,
  :id, :body, :author_id
)

json.comments do
  json.array!(@comment.comments) do |comment|
    json.extract!(
      comment,
      :id, :body, :author_id
    )

    json.author do
      json.extract!(
        comment.user,
        :id, :username
      )
    end
  end
end

json.author do
  json.extract!(
    @comment.user,
    :id, :username
  )
end
