json.partial! 'media/medium', medium: @medium

json.likes do
  json.array!(@medium.likes) do |like|
    json.extract!(
      like,
      :id, :user_id, :media_id
    )
  end
end
