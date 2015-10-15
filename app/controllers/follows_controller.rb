class FollowsController < ApplicationController

  def index
    @follows = Follow.all
    @id = params[:followee_id] || current_user.id
    @follows = @follows.find_all {|follow| follow.follower_id == @id.to_i}

    render json: @follows
  end

  def create
    @follow = Follow.new({followee_id: params[:followee_id].to_i})
    @follow.follower_id = current_user.id
    @follow.save!
    render json: @follow
  end

  def destroy
    @follow = Follow.find_by_followee_id(params[:followee_id].to_i)
    @follow.destroy
    render json: @follow
  end

end
