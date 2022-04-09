import React from "react"
import Head from "next/head"

import SSRProvider from "react-bootstrap/SSRProvider"
import { CartProvider } from "../contexts/CartContext"
import { WishlistProvider } from "../contexts/WishlistContext"
import NavbarComponent from "./bootstrap/Navbar"

const Layout = (pageProps) => {
  console.log('Layout');
  return (
    <SSRProvider>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>{pageProps.title}</title>
      </Head>
      <main>{pageProps.children}</main>
    </SSRProvider>
  )
}

export default Layout