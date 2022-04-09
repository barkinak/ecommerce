import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import CardProduct from "./CardProduct"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const Products = (pageProps) => {
    const products = pageProps.products;

    return (
        <section className="container pt-5">
            <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
                <h2 className="h3 mb-0 pt-3 me-2">Current Offers</h2>
                <div className="pt-3">
                    <a className="btn btn-outline-accent btn-sm" href="shop-grid-ls.html">More products<i className="ci-arrow-right ms-1 me-n1"></i></a>
                </div>
            </div>
            <div className="row pt-2 mx-n2">
                {products.map((product, index) =>
                    (<CardProduct key={index} product={product} />)
                )}
            </div>
        </section>
    )
}

export default Products