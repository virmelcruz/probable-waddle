class Api::V1::ChannelsController < ApiController
  def index
    @channels = Channel.all

    render json: @channels, each_serializer: Api::V1::ChannelSerializer
  end

  def create
    @channel = Channel.create(channel_params)

    if @channel.save
      render json: @channel, serializer: Api::V1::ChannelSerializer
    else
      render json: { message: @channel.errors.full_messages.to_sentence }, status: 422
    end
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :type)
  end
end
