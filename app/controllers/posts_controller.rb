class PostsController < ApplicationController
  def index
    @posts = Post.all.order(id: "DESC")
  end
  def create
    post = Post.create(content: params[:content], checked: false)
    render json:{ post: post }  
  end
  def checked
    post = Post.find(params[:id])
    # ルーティングで指定したidを受け取る、そのidを受け取りレコードを取得
    if post.checked
      # boolean型のcheckedカラムを参照する（boolean型とはtrueまたはfalseの真理値を判断する型）
      post.update(checked: false)
       # 既読を解除するためにfalseへ変更（trueが既読）
    else
      post.update(checked: true)
      # 既読にするためtrueへ変更
    end
    item = Post.find(params[:id])
     #  checkedで更新した（データベースで変更した）post.findのデータをitemに入れて
    render json: { post: item }
    # renderでjsonのデータを.jsファイルに飛ばす

  end

end             