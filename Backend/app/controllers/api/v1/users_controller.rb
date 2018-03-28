class Api::V1::UsersController < ApplicationController

 def index
   @users = User.all
   render json: @users
 end
 def create
   @user = User.find_or_create_by(name: params[:name])
   @score = Score.create(score: params[:score])
   @score.user = @user
   @score.save
   render json: @score, include: :user
 end

 private

 def user_params
   params.permit(:name, :score)
 end
end
