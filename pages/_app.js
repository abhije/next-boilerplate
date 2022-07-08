import "../styles/style.scss";
import Layout from "../components/templates/layout";

//------------------------------------------------------------------------------
//-- APP --
//------------------------------------------------------------------------------

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
