class MessagesController < ApplicationController
  def index
    @messages = Message.all
  end

  def create
    byebug
  end
end
