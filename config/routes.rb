Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :media
  end
  resources :users, only: [:new, :create, :update, :show, :index]
  resource :session, only: [:new, :create, :destroy]
end
