class Api::MediaController < ApplicationController

  def new

  end

  def index
    @user = User.find(params[:user_id].to_i)
    @media = @user.media
    render json: @media
  end

  def create
    @media = Medium.new({title: params[:title], link: params[:url], description: params[:description]})
    @media.author_id = current_user.id
    @media.save!
    render json: @media
  end

  def show
    @medium = Medium.find(params[:id])
    render json: @medium
  end
end
