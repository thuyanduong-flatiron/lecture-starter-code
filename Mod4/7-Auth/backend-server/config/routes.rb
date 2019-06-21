Rails.application.routes.draw do
  # localhost:3000/api/v1/login
  # localhost:3000/api/v1/profile
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      post '/login', to: 'auth#create'
      get '/users/:id', to: 'users#show'
    end
  end
end
