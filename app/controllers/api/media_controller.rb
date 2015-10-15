class Api::MediaController < ApplicationController
  def index
    @user = User.find(params[:user_id].to_i)
    @media = @user.media
    render json: @media
  end
end
