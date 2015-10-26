json.array!(@media) do |medium|
  json.extract!(
    medium,
    :id, :title, :description, :author_id, :link
  )
end
