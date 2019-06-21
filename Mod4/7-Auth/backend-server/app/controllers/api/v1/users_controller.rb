require "byebug"

class Api::V1::UsersController < ApplicationController

  def show
    render json: User.find(params[:id]), status: :accepted
  end

end
