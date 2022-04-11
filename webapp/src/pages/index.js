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
          <main className="page-wrapper">
            <Products fluid products={products}/>
          </main>
        </React.Fragment>
    )
}
  
export default Index