class MessagesController < ApplicationController
  def index
    @messages = Message.where('id > ?', params[:id].to_i)

    render json: @messages
  end

  def create
    @message = Message.new message_params
    @message.save

    respond_to do |format|
      format.html { redirect_to root_path }
      format.json { render json: @message }
    end
  end

  private

  def message_params
    params.require(:message).permit(:user, :body)
  end
end
