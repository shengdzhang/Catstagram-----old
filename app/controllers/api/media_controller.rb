class Api::MediaController < ApplicationController
  def index
    @user = User.find(params[:user_id].to_i)
    @media = @user.media
    render json: @media
  end

  def create
    @media = Medium.new({title: "hi", link: params[:url]})
    @media.author_id = current_user.id
    @media.save!
    render json: @media
  end
end
