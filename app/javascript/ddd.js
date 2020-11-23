function memo() {
  const submit = document.getElementById("submit");
  // 投稿するボタンの情報を取得（submitで）
  submit.addEventListener("click", (e) => {
    投稿ボタンをクリックしたら実行される
    const formData = new FormData(document.getElementById("form"));
// 　　　フォームで入力した値が得られる
// 　　　今回はメモはフォームで入力する為、これが必要
    const XHR = new XMLHttpRequest();
// 　　 Ajaxに必要なオブジェクト（他のjavaでも一緒？）
    XHR.open("POST", "/posts", true);
    // 　　ファイルのリクエスト、ファイルの要求がpostの分
    XHR.responseType = "json";
    // 今回も返却されるデータ形式はJSON
    XHR.send(formData);
    // リクエストの送信、今回はフォームデータもあるから
    // formDataも記載
    XHR.onload = () => {
      // レスポンスを受け取った時の処理
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      const item = XHR.response.post;
      // XHR.response.postが帰ってきたデータそれをitemに入れる
      const list = document.getElementById("list");
      // 今回はメモの描写をするのでHTMLに描写をする
      // そのHTMLを描画する場所の指定（id,listに描写）
      const formText = document.getElementById("content");
      // メモの入力フォームをリセットするため(意味が解らない)
      const HTML = `
      <div class="post" data-id=${item.id}>
      <div class="post-date">
      投稿日時：${item.created_at}
      </div>
      <div class="post-content">
      ${item.content}
      </div>
      </div>`;
      // htmlで置き換える所の指定
      list.insertAdjacentHTML("afterend", HTML);
      // indexで作ったid=listの所に上で作ったhtmlを置き換える
      formText.value = "";
      // メモの入力フォームに入力されたままの文字」はリセットされます
      // 正確には、空の文字列に上書きされるような仕組みです
    };
    e.preventDefault();
    // デフォルトのイベントを阻止する
    // １文字目の e は("click", (e)のe
  });

}
window.addEventListener("load", memo);
