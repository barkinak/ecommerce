import React from "react"
import Head from "next/head"

import SSRProvider from "react-bootstrap/SSRProvider"
import { CartProvider } from "../contexts/CartContext"
import { WishlistProvider } from "../contexts/WishlistContext"
import NavbarComponent from "./NavbarComponent"

const Layout = (pageProps) => {
  console.log('Layout');
  return (
    <SSRProvider>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>{pageProps.title}</title>
      </Head>
      <CartProvider>
        <WishlistProvider>
          <NavbarComponent></NavbarComponent>
          <main>{pageProps.children}</main>
        </WishlistProvider>
      </CartProvider>
    </SSRProvider>
  )
}

export default Layout