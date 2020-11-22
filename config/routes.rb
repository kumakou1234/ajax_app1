Rails.application.routes.draw do
  root to: 'posts#index' 
  post 'posts', to: 'posts#create'
  get 'posts/:id', to: 'posts#checked'
  # checkedのルーティング作成　'posts/:id'でデータを取得する場所の指定
end
