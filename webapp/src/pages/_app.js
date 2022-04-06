import "../scss/style.default.scss"
import Layout from "../components/Layout"

const App = ({ Component, pageProps }) => {
    console.log(`Component, ${Component}`);
    return (
        <Layout {...pageProps}>
            <Component {...pageProps} />
        </Layout>
    )
}
  
export default App