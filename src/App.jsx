import {useRef} from 'react'
import './App.css'

function App() {

  // 猫画像のHTML要素を記憶する
  const imageRef = useRef(null)
  
  // マウスが動くたびに、ページ内でのマウス位置をcss変数へ渡す
  // handle:処理する　MouseMove:マウスが動く　currentTarget:イベントが設定された現在の要素
  // getBoundingClientRect：要素の位置と大きさを取得 clientX：画面左端から見たマウスの横位置 clientY：画面上端から見たマウスの縦位置
  const handleMouseMove = ( event ) => {
    const page = event.currentTarget
    const rect = page.getBoundingClientRect()
  
    // ページ左上を基準にしたマウスの座標を計算する
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top

    // cssの--mouse-xと--mouse-yを更新する
    // setProperty：CSSの値を設定
    page.style.setProperty('--mouse-x', `${mouseX}px`)
    page.style.setProperty('--mouse-y', `${mouseY}px`)
  }
 
  // rotate: 回転
 const handleImageMove = (event) => {
   const image = imageRef.current
   const rect = image.getBoundingClientRect()

   const x = event.clientX - rect.left
   const y = event.clientY - rect.top

   const rotateY = (x / rect.width - 0.5) * 16
   const rotateX = (0.5 -y / rect.height) * 16

   image.style.setProperty('--rotate-x', `${rotateX}deg`)
   image.style.setProperty('--rotate-y', `${rotateY}deg`)
  }

 const resetImage = () => {
   const image = imageRef.current

   image.style.setProperty('--rotate-x', '0deg')
   image.style.setProperty('--rotate-y', '0deg')
  }

  const myProfile = {
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
    < main className="page-effects" onMouseMove={handleMouseMove}>
      < div className="container">
       <div
        ref={imageRef}
        className="cat-card"
        onMouseMove={handleImageMove}
        onMouseLeave={resetImage}
       >
        <img src="/assets/img/253464256.png" alt="Black Kitty" />
       </div>

       <h1>About me</h1>
       <h2>Hi! Welcome to my page ☆</h2>
       <div>
        <h4>Bio</h4>
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
    </main>
  )
}

export default App
