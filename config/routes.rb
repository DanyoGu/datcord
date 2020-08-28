Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
      resource :user, only: [:create]
      resource :session, only: [:create, :destroy, :show]
      resources :servers, only: [:index, :create, :destroy, :update, :show, :join, :leave] do
        resources :channels, only: [:index, :create, :show]
      end
      resources :memberships, only: [:create, :destroy]
      resources :messages, only: [:create, :index]
  end

  post 'api/servers/join/:invite_code', to: 'api/servers#join'
  delete 'api/servers/leave/:id', to: 'api/servers#leave'
  root to:'static_pages#root'
  mount ActionCable.server, at: '/cable'
end
