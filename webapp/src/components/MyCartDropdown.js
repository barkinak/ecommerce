import React from "react"
import CartItems from "./CartItems"

const MyCartDropdown = (pageProps) => {
    return(
        <div className="dropdown-menu dropdown-menu-end">
            <div className="widget widget-cart px-3 pt-2 pb-3" style={{width: '20rem;'}}>
                <CartItems></CartItems>
                <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                    <div className="fs-sm me-2 py-2">
                        <span className="text-muted">Subtotal:</span>
                        <span className="text-accent fs-base ms-1">$265.<small>00</small></span>
                    </div>
                    <a className="btn btn-outline-secondary btn-sm" href="test-next.html">Expand cart
                        <i className="ci-arrow-right ms-1 me-n1"></i>
                    </a>
                </div>
                <a className="btn btn-primary btn-sm d-block w-100" href="test-next.html">
                    <i className="ci-card me-2 fs-base align-middle"></i>Checkout
                </a>
            </div>
        </div>
    );
}

export default MyCartDropdown