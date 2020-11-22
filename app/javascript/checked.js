function check() {
  // 関数の定義
  const posts = document.querySelectorAll(".post");
  // 変数の中に発火する場所を入れている
  posts.forEach(function (post) {
    // 今回は発火する場所が複数なのでforeachを用いて一つ一つに発火させる
    if (post.getAttribute("data-load") != null) {
      return null;
    }
    post.setAttribute("data-load", "true");
    post.addEventListener("click", () => {
        // クリックしたら発火するよ
        const postId = post.getAttribute("data-id");
        // どのメモか区別する為のidを取得（カスタムデータでデータを取得）
        const XHR = new XMLHttpRequest();
        // XMLHttpRequestはサーバーにリクエストを送れる、
        // まず、オブジェクトを生成する必要があるので XHR　を作成
        XHR.open("GET", `/posts/${postId}`, true);
        // 貰うデータのリクエスト
        XHR.responseType = "json";
        // データの形式のリクエスト
        XHR.send();
        // ここでコントローラーに欲しいデータの送信
        XHR.onload = () => {
          if (XHR.status != 200) {
            alert(`Error ${XHR.status}: ${XHR.statusText}`);
            return null;
          }
          const item = XHR.response.post;
          // XHR.response.post;でコントローラーで指定したitemを取得できる
          if (item.checked === true) {
            post.setAttribute("data-check", "true");
          } else if (item.checked === false) {
            post.removeAttribute("data-check");
          }
        };
    });

  });
}
setInterval(check, 1000);
// window（ページ）をload（読み込み）した時に実行します。
// これをしないとhtmlより先に関数のcheckがロードしてしまいエラーが出る