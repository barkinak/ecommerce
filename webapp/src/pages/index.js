import React from "react"
import Link from "next/link"

import Products from "../components/Products"
import products from "../data/products.json"

export async function getStaticProps() {
    return {
      props: {
        header: {
          absolute: true,
          transparentBar: true,
          transparentNavbar: true,
        },
        title: "Homepage",
      },
    }
  }

const Index = () => {
    console.log('Index');
    return (
        <React.Fragment>
            <h5 className="title">
                Read{' '}
                <Link href="/test-next">
                    <a>this page!</a>
                </Link>
            </h5>
            <Products fluid products={products}/>
        </React.Fragment>
    )
}
  
export default Index