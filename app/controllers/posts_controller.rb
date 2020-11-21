class PostsController < ApplicationController

  def  index 
      #  indexアクションを定義『コントローラーのインスタンス』
      # @post ="これはコントローラーで定義したインスタンス変数を確認するための文字列です"
      # @post = Post.find(1)  # 1番目のレコードを@postに代入

      @posts = Post.all  # すべてのレコードを@postsに代入
  def new
        # ファームの実装の新しいアクションの指令
  def create
    Post.create(content: params[:aa])
  end
  end
  end
end
