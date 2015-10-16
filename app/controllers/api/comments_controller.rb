class Api::CommentsController < ApplicationController

  def index
    @media = Medium.find(params[:media_id])
    @comments = @media.comments
    render json: @comments
  end

  def create

  end

  def update

  end

  def destroy

  end

end
