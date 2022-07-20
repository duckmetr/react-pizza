import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Header from './components/Header'
import './scss/app.scss'

function App() {
  return (
    <div className="wrapper">
      <div className="main">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
