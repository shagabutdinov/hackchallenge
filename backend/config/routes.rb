Rails.application.routes.draw do
  get '/events', to: 'events#list'
  post '/events/:id', to: 'events#update'
  get '/events/trigger', to: 'events#trigger'
  get '/events/rooms', to: 'events#rooms'
  get '/events/cameras', to: 'events#cameras'
  root to: 'events#error_404'
end
