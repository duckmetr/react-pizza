import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div>
      <h1>Cart</h1>
      <div className="cart__bottom-buttons">
        <Link to="/" className="button button--outline button--add go-back-btn">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </div>
  )
}

export default Cart
