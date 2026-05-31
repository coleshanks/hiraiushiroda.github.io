# Dev Log
# 日々のまとめ記録🗒️

## 2026-05-04
- 目的:記録ファイルと今度の予定をcodexと相談する！
- 変更したファイル:dev-log.md, plan.mdを追加 App.jsxでgithubのリンクでaタグ追加
- やったこと:gitでのファイル作成の方法　この記録　プランをcodexと作成　App.jsxでaタグの付け方を学習
- 学び:ファイルの作成gitコマンド　1. mkdir -p docs 2. touch (ファイルの場所/ファイルの名前をつける)　
　　　<a
          href="https://github.com/hiraiushiroda"
          target="_blank"
          rel="noopener noreferrer"
        >
         GitHub
        </a>
         リンクの追加はaタグ　href:Hypertext Referenceの略で、「このリンクが参照するURL」を指定する属性
          target="_blank": 新しいタブで開く指定
          rel="noopener noreferrer": セキュリティ対策
            noopener: 開いた先ページから元ページを操作されにくくする
            noreferrer: 遷移元情報（Referer）を送らない
          GitHub: 画面に表示されるリンク文字列
          実務ルールとしては、target="_blank" を使うときは rel="noopener noreferrer" をセットで付ける、で覚えてOK

- 詰まった点:codexアプリの使い方で混乱した　チャットではなく、playgroundで実装可能になることを知った。 aタグの付け方を今後も練習する
- 次にやること:plan.mdを見てまずday1から始めよう　cssファイルでリンクの色を変更する
- 一言:久しぶりにこのリポジトリを開いた。いろんなイメージや沢山やりたいことは思い浮かぶけど、実際に行動に移すのが一番難しい。

## 2026-05-06
- 今日の目的:①プラン1を実行　②githubリンクの色をcssファイルで変更
- 開始時点の状態:前回のまま
- やったこと:day1まで達成！　main.jsx,App.jsx,index.css,App.css,index.htmlを読んだ　reactあり・なしの違いを理解　websiteの色、配置を変更　
　ファビコン変更
　色の付け方`：color`
　文字の太さ　`font-weight`
　文章を左揃えにする　`text-align: left;`

- 変更したファイル:プラン、記録、読んだファイルにメモ
- うまくいったこと:ファビコン変更
- 詰まったこと:cssのクラスセレクタ、要素セレクタの違いと使い方が難しかった 全てのファイルの内容を完全には覚えていない
- 詰まりの原因:実際にこれを使ったことがないから
- 明日の最初の1手:今回の復習から開始
- 学習時間:4.5h

## 2026-05-31
- 今日の目的: Day 2 JavaScript超基礎1を達成
- やったこと: 年齢を更新　ページが白画面になったので修正　githubの設定が原因
  データは const myProfile = {...} に集約し、表示は {myProfile.xxx} で参照する。　
  **htmlをreact使ってjsxの書き方に変更しました。**
- 難しかったこと: githubのページの設定方法がいまいちわからなかった　codexに聞いたら解決したけど 
  **mapの書き方が難しい**
- 覚えること: 白画面でも「サーバが落ちた」とは限らない。まず githubのActions と Pages 設定を確認
-note:
 **const と let の使い分け**
 const: 再代入しない値に使う（基本はこれ）　絶対に変わらない値
 let: あとで値を変える予定があるときに使う　変わる可能性のあるもの　年齢など
 *const の「中身変更」と「再代入」は別 オブジェクト自体の再代入はNGでも、プロパティ変更は可能　（profile = {} をしたいなら let を使う。）
 ```js
 const profile = { name: "Hirai", age: 23 }
 profile.age = 24       // OK（中身変更）
 /* profile = {} */     // NG（再代入）
 ```
 **⭐︎配列 [] とオブジェクト {}**
 配列: 順番つきのデータ
 オブジェクト: 名前付きのデータ（key: value）
 ```js
 const hobbies = ["coding", "mochi", "cat"]  // 配列
 const profile = {                           // オブジェクト
  name: "Hirai",
  age: 23,
  from: "Japan"
 }
 ```
 **⭐︎console.log(...) は画面に表示する命令じゃない!**
 - `console.log` = 「メモ帳に書く」  
 - JSX（`<p>...</p>`） = 「画面に貼る」
 流れはこう:
 1. Reactが `App.jsx` を読む  
 2. `console.log(...)` は裏側のログ欄に出す  
 3. `return (...)` の中身だけがページに見える
 だから、ページに出したいときは→
 ```jsx
 <p>{myProfile.age}</p>
 <p>{myProfile.from}</p>
 ```
 - `js`: JavaScriptだけ。HTMLタグはそのまま書けない  
 - `jsx`: JavaScript + HTMLっぽいタグを書ける（React用）
 - `md`: 表示用テキスト。コードは ```js ... ``` みたいに囲んで貼る
 - `css`: 見た目専用。`color`, `margin` などを書く
 - `html`: ページの骨組みを直接書く
 例:
 - `js` で画面表示したい → `console.log` か、DOM操作が必要
 - `jsx` で画面表示したい → `return (<p>...</p>)` に書けば見える

 **⭐︎Reactは App() の中で、タグなど画面に出すJSXは return (...) の中にかく！**
 - `console.log` は画面に出ない。`Console` に出る。 
 - 画面に出す内容は `return (...)` の中に書く。  
 - JSXは `return` 内で **1つの親要素** にまとめる。  
 - 追加要素（`<p>` など）は親要素（今は `<div className="container">`）の中に入れる。  
