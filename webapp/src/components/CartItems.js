import React from "react"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { removeCartItem } from "../hooks/UseCart"

const CartItems = (pageProps) => {
    const [cartItems, dispatch] = useContext(CartContext);

    // Remove from cart
    const removeFromCart = (e, product) => {
        e.preventDefault()
        dispatch({ type: "remove", payload: product })
        //removeCartItem(product)
    }

    return(
        <div style={{ height: '15rem;' }} data-simplebar data-simplebar-auto-hide="false">
            {cartItems.map((item, index) => (
                <div key={index} className="widget-cart-item pb-2 border-bottom">
                    <button 
                        className="btn-close text-danger"
                        onClick={(e) => removeFromCart(e, item)} 
                        type="button" 
                        aria-label="Remove">
                            <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="d-flex align-items-center">
                        <a className="flex-shrink-0" href="test-next.html">
                            <img
                                src={item.img.detail[0].img}
                                alt={item.img.detail[0].alt}
                                width="64"
                            />
                        </a>
                        <div className="ps-2">
                            <h6 className="widget-product-title">
                                <a href="test-next.html">{item.name}</a>
                            </h6>
                            <div className="widget-product-meta">
                                <span className="text-accent me-2">{item.price}.<small>00</small></span><span className="text-muted">x 1</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CartItems