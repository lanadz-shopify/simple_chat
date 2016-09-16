class HomeController < ApplicationController
  def index
    if params[:desc]
      @messages = Message.order(created_at: :desc)
    else
      @messages = Message.order(created_at: :asc)
    end
  end
end
