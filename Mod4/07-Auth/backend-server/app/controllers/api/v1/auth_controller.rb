require "byebug"
class Api::V1::AuthController < ApplicationController

  def create # POST /api/v1/login
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      render json: {}
    else
      render json: {}
    end
  end

end
