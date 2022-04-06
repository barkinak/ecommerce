import React from "react"
import Head from "next/head"

import SSRProvider from "react-bootstrap/SSRProvider"
import NavbarComponent from "./bootstrap/Navbar"

const Layout = (pageProps) => {
  console.log('Layout');
  return (
    <SSRProvider>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>{pageProps.title}</title>
      </Head>
      <NavbarComponent></NavbarComponent>
      <main>{pageProps.children}</main>
    </SSRProvider>
  )
}

export default Layout