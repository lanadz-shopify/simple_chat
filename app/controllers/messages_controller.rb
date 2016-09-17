class MessagesController < ApplicationController
  def index
    @messages = Message.where('id > ?', params[:id].to_i)

    render json: @messages
  end

  def create
    @message = Message.new message_params
    @message.save

    render json: @message
  end

  private

  def message_params
    params.require(:message).permit(:user, :body)
  end
end
