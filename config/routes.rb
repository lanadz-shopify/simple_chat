Rails.application.routes.draw do
  get 'home/index'

  resources :messages, only: [:index, :create]

  root 'home#index'
end
