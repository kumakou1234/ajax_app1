class PostsController < ApplicationController

  def  index 
      #  indexアクションを定義『コントローラーのインスタンス』
      # @post ="これはコントローラーで定義したインスタンス変数を確認するための文字列です"
      # @post = Post.find(1)  # 1番目のレコードを@postに代入

      @posts = Post.all.order(id: "DESC")
  
  def create
    Post.create(content: params[:aa])
    redirect_to action: :index
  end
  end
end
