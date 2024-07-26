import './App.css'
import './index.css'

function App() {
  return (
    <>
      <main className="main-content">
        <header>
          <p className="title">Order Fondue !</p>
          <p className="exit">X</p>
        </header>
        <div className="content">
          <div className="left-aside">
            <img src="/stick.png" alt="stick" className="stick-image"/>
            <button id="addMarshmello">Add Marshmello !</button>
            <button id="addStrawberry">Add Strawberry !</button>
            <button id="addBanana">Add Banana !</button>
            <p>You can't add more than 3 ingredients.</p>
          </div>
          <div className="right-aside">
            <div className="allIngredients">
              <div id="selectedIngredients">
                <p className="header-ingredients">Your choice on a stick!</p>
                <p className="marshmello">0 Marshmello Added</p>
                <p className="strawberry">0 Strawberry Added</p>
                <p className="banana">0 Banana Added</p>
              </div>
              <div className="calculate">
                <p id="totalPrice">PRICE : 100 BAHT</p>
                <button id="checkout">Order</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
