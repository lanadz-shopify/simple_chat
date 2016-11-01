class MessagesController < ApplicationController
  def index
    @messages = Message.where('id > ?', params[:id].to_i)

    render json: @messages
  end

  def create
    @message = Message.new message_params
    if @message.save
      render json: @message
    else
      render json: { errors: @message.errors }, status: :unprocessable_entity
    end
  end

  private

  def message_params
    params.require(:message).permit(:user, :body)
  end
end
