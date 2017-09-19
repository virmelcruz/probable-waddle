class Api::V1::UsersController < ApiController
  def index
    @users = User.all

    render json: @users, each_serializer: Api::V1::UserSerializer
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, serializer: Api::V1::UserSerializer
    else
      render json: { message: @user.errors.full_messages.to_sentence }, status: 422
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(user_params)
      render json: @user, serializer: Api::V1::UserSerializer
    else
      render json: { message: @user.errors.full_messages.to_sentence }, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :full_name)
  end
end
