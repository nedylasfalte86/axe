import { useEffect } from 'react';
import '../css/cart.css';
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, decreaseCart, addToCart, clearCart, getTotals } from '../features/cartSlice';
import { plurielInCart } from '../helpers/pluriels'
import { Link, useNavigate } from 'react-router-dom';
import PayButton from './PayButton';
import Navbar from './NavBar';
import { NavBar5 } from './NavBar5';


const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const { cartTotalQuantity } = useSelector(state => state.cart);


  useEffect(() => {
    dispatch(getTotals());
    plurielInCart()
  }, [cart, dispatch])

  const handleRemoveFromCart = (cartItems) => {
    dispatch(removeFromCart(cartItems))
  }

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product))
  }

  const handleIncreaseCart = (product) => {
    dispatch(addToCart(product))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }



  return (
    <div className="cart-container">
      <NavBar5 />
      {cartTotalQuantity > 0 ? (
        <h2>Détail de votre panier ({cartTotalQuantity} article{plurielInCart(cartTotalQuantity)} - {cart.cartTotalAmount} €)</h2>
      ) : (
        <h2>Détail de votre panier </h2>
      )}

      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Votre panier est vide</p>
          <div className="start-shopping">
            <Link to={"/"}>
              <span>Commencer mes achats</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Produit{plurielInCart()}</h3>
            <h3 className="price">Prix</h3>
            <h3 className="quantity">Quantité</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems?.map((cartItem) => (
              <div className="cart-item" key={cartItem._id}>
                <div className="cart-product">
                  <img src={cartItem.image?.url} alt={cartItem.name} />
                  <div>
                    <h3>{cartItem.name}</h3>
                    <p>{cartItem.desc.length > 50 ? cartItem.desc.substring(0, 100) + '...' : cartItem.desc}</p>
                    <button onClick={() => handleRemoveFromCart(cartItem)}>Supprimer</button>
                  </div>
                </div>
                <div className="cart-product-price">{cartItem.price.toFixed(2)} €</div>
                <div className="cart-product-quantity">
                  <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
                </div>
                <div className="cart-product-total-price">
                  {cartItem.price.toFixed(2) * cartItem.cartQuantity} €
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={() => handleClearCart()}> Vider le panier</button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Sous-total</span>
                <span className="amount">{cart.cartTotalAmount.toFixed(2)} €</span>
              </div>
              <p>Taxes et frais d'expédition calculés à la caisse</p>
              {
                auth._id ?
                  <PayButton cartItems={cart.cartItems} />
                  :
                  <button className="cart-login" onClick={() => navigate('/login')}> Connectez-vous</button>
              }
              <div className="continue-shopping">
                <Link to={"/"}>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>  &nbsp;
                    Continuer mes achats</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart