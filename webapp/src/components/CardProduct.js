import { React, useContext } from "react"
import Stars from "./Stars"
import { CartContext } from "../contexts/CartContext"
import { addCartItem } from "../hooks/UseCart"

const CardProduct = ({product}) => {
    const [cartItems, dispatch] = useContext(CartContext);
    
    // Add to cart
    const onQuantityChange = (e, product) => {
        console.log(`product, ${product}`);
        console.log(`e, ${e.target.value}`);
        //addCartItem(product, value)
        dispatch({ type: "add", payload: product })
    }

    return (
        // Product
        <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
            <div className="card product-card">
                <div className="product-card-actions d-flex align-items-center">
                    <a className="btn-action nav-link-style me-2" href="#">
                        <i className="ci-compare me-1"></i>Compare
                    </a>
                    <button 
                        className="btn-wishlist btn-sm"
                        type="button" 
                        data-bs-toggle="tooltip" 
                        data-bs-placement="left" 
                        title="Add to wishlist">
                        <i className="ci-heart"></i>
                    </button>
                </div>
                    <a className="card-img-top d-block overflow-hidden" href="test-next.html">
                        <img
                            src={product.img.detail[0].img}
                            alt={product.img.detail[0].alt}
                        />
                    </a>
                <div className="card-body py-2">
                    <a className="product-meta d-block fs-xs pb-1" href="#">{product.category[1]}
                    </a>
                    <h3 className="product-title fs-sm">
                        <a href="test-next.html">{product.name}
                        </a>
                    </h3>
                    <div className="d-flex justify-content-between">
                        <div className="product-price">
                            <span className="text-accent">{product.price}.<small>00</small></span>
                        </div>
                        <Stars
                            rating = {product.stars}
                            className = "star-rating">
                        </Stars>
                    </div>
                </div>
                <div className="card-body card-body-hidden">
                    <button 
                        className="btn btn-primary btn-sm d-block w-100 mb-2"
                        onClick={(e) => onQuantityChange(e, product)} 
                        type="button">
                        <i className="ci-cart fs-sm me-1"></i>Add to Cart
                    </button>
                    <div className="text-center">
                        <a className="nav-link-style fs-ms" href="#quick-view-electro" data-bs-toggle="modal">
                            <i className="ci-eye align-middle me-1"></i>Quick view
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProduct