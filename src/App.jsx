import './App.css'

function App() {
  return (
    <div className="container">
      {/* TODO: swap this image for your own photo */}
      <img src="/assets/img/253464256.png" alt="Black Kitty" />

      {/* TODO: update your name */}
      <h1>About me</h1>

      {/* TODO: write something about yourself */}
      <h2>Hi! Welcome to my page ☆ </h2>
      <div>
        <h4>Bio</h4>
         <p>age:23</p>
         <p>from:Japan</p>
         <p>currently:Junior web developer</p>
         <p>Email:hiraiu.jp@gmail.com</p>
         <a
        <p>name:Hirai Ushiroda 後田ひらい</p>
        <p>age:22</p>
        <p>from:Japan</p>
        <p>currently:Junior web developer</p>
	<a href="mailto:hiraiu.jp@gmail.com">Email:hiraiu.jp@gmail.com</a>
        <a
          href="https://github.com/hiraiushiroda"
          target="_blank"
          rel="noopener noreferrer"
         >
         GitHub
        </a>
         {/*リンクの追加はaタグ　href:Hypertext Referenceの略で、「このリンクが参照するURL」を指定する属性
          target="_blank": 新しいタブで開く指定
          rel="noopener noreferrer": セキュリティ対策
            noopener: 開いた先ページから元ページを操作されにくくする
            noreferrer: 遷移元情報（Referer）を送らない
          GitHub: 画面に表示されるリンク文字列
          実務ルールとしては、target="_blank" を使うときは rel="noopener noreferrer" をセットで付ける、で覚えてOK
         */}
      </div>
      <div>
        <h4>Background</h4>
        <p> Hiroshima University, School of Integrated Arts and Sciences </p>
        <p> Hiroshima Motomachi High School </p>
      </div>

       <ul>
        <li>🌱 I'm currently learning React, JavaScript, and CSS.</li>
        <li>🤔 I need help with learning React.</li>
        <li>🤍 Fun fact: mochi lover</li>
      </ul>
    </div>
  )
}

export default App
