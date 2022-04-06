import React from "react"
import Link from "next/link"

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
        </React.Fragment>
    )
}
  
export default Index