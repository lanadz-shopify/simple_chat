Rails.application.routes.draw do
  get 'home/index'

  resources :messages, only: [:create]

  root 'home#index'
end
