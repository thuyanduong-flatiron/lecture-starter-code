Rails.application.routes.draw do
  # localhost:3000/api/v1/login
  # localhost:3000/api/v1/profile
  namespace :api do
    namespace :v1 do

      resources :users, only: [:index]

      #Today, We will be building out the following two routes
      post '/fakelogin', to: 'auth#fake_create'
      post '/login', to: 'auth#create'

    end
  end
end
