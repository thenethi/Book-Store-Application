import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value
      const {cartItemDetails}=props 
      const {title,image,price,isbn13,itemsCount}=cartItemDetails
      const onClickDecrement = () => {
        decrementCartItemQuantity(isbn13)
      }
      const onClickIncrement = () => {
        incrementCartItemQuantity(isbn13)
      }
      const onRemoveCartItem = () => {
        removeCartItem(isbn13)
      }
    let newPrice=price.replace('$','');
    let updatedPrice=parseInt(newPrice)
    console.log(updatedPrice)
    const totalPrice = updatedPrice * itemsCount

      return (
        <li className="cart-item">
          <img className="cart-product-image" src={image} alt={title} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{title}</p>
            </div>
            <div className="cart-quantity-container">
              <button
                type="button"
                className="quantity-controller-button"
                data-testid="minus"
                onClick={onClickDecrement}
              >
                <BsDashSquare color="#52606D" size={12} />
              </button>
              <p className="cart-quantity">{itemsCount}</p>
              <button
                type="button"
                className="quantity-controller-button"
                data-testid="plus"
                onClick={onClickIncrement}
              >
                <BsPlusSquare color="#52606D" size={12} />
              </button>
            </div>
            <div className="total-price-remove-container">
              <p className="cart-total-price">Rs {totalPrice}/-</p>
              <button
                className="remove-button"
                type="button"
                onClick={onRemoveCartItem}
              >
                Remove
              </button>
            </div>
          </div>
          <button
            className="delete-button"
            type="button"
            onClick={onRemoveCartItem}
            data-testid="remove"
          >
            .
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem