import './App.css'

function App() {
  return (
    <div className="container">
      {/* TODO: swap this image for your own photo */}
      <img src="/assets/img/253464256.png" alt="Mochi lover" />

      {/* TODO: update your name */}
      <h1>About me</h1>

      {/* TODO: write something about yourself */}
      <h2>Hello! I’m Hirai Ushiroda.</h2>
      <div>
        <h4>Bio</h4>
        <p>name:Hirai Ushiroda 後田ひらい</p>
        <p>age:22</p>
        <p>from:Japan🌸</p>
        <p>currently:Junior web developer</p>
        <p>Email:hiraiu.jp@gmail.com</p>
        <p>GitHub:🐈‍⬛ https://github.com/hiraiushiroda </p>
      </div>
      <div>
        <h4>Background</h4>
        <p> Hiroshima University, School of Integrated Arts and Sciences </p>
        <p> Hiroshima Motomachi High School </p>
      </div>

      <ul>
        {/* TODO: update these list items to reflect what you're learning / working on */}
        <li>🌱 I'm currently learning React, JavaScript, and CSS.</li>
        <li>🤔 I need help with learning React.</li>
        <li>🤍 Fun fact: mochi lover</li>
      </ul>
    </div>
  )
}

export default App
