Rails.application.routes.draw do
  devise_for :users
  
  # rootはRoom一覧画面にしておく
  root 'rooms#index'
  
  resources :rooms, only: %i[show]
end
