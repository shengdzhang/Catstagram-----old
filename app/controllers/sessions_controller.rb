class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_credentials(
      user_params[:username],
      user_params[:password]
    )
    if user
      log_in(user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid username or password."]
      redirect_to new_session_url
    end
  end

  def destroy
    sign_out
    redirect_to new_session_url
  end

  private

  def user_params
    params.require(:user).permit(:password, :username)
  end

end
