class Api::V1::MessagesController < ApiController
  def index
    @messages = Message.where(receiveable_id: params[:receiveable_id])
    render json: @messages
  end

  def create
    @message = Message.new(message_params)

    if @message.save
      render json: @message, each_serializer: Api::V1::MessageSerializer
    else
      render json: { message: @message.errors.full_messages.to_sentence }, status: 422
    end
  end

  private
  def message_params
    params.require(:message).permit(:content, :receiveable_id, :receiveable_type)
  end
end
  