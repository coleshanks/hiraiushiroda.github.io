import './App.css'

function App() {
  const myProfile = {
    age: 23,
    from: "Japan",
    currently: "Junior web developer",
    email: "hiraiu.jp@gmail.com",
    githubUrl: "https://github.com/hiraiushiroda",
    githubLabel: "GitHub",
    background: [
      "Hiroshima University, School of Integrated Arts and Sciences",
      "Hiroshima Motomachi High School"
    ],
    learning: "React, JavaScript, and CSS",
    helpWith: "learning React",
    funFact: "mochi lover",
  }
 
  return (
    <div className="container">
      <img src="/assets/img/253464256.png" alt="Black Kitty" />
      <h1>About me</h1>
      <h2>Hi! Welcome to my page ☆</h2>
      <div>
        <h4>Bio</h4>
         <p>age:{myProfile.age}</p>
         <p>from:{myProfile.from}</p>
         <p>currently:{myProfile.currently}</p>
         <a href={`mailto:${myProfile.email}`}>Email:{myProfile.email}</a>
        <a
          href={myProfile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
         >
         {myProfile.githubLabel}
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
        {myProfile.background.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>

       <ul>
        <li>🌱 I'm currently learning {myProfile.learning}.</li>
        <li>🤔 I need help with {myProfile.helpWith}.</li>
        <li>🤍 Fun fact: {myProfile.funFact}</li>
      </ul>
    </div>
  )
}

export default App
