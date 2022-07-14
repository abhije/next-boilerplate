import "../styles/style.scss";
import Layout from "../components/templates/layout";
import { SSRProvider } from "react-bootstrap";

//------------------------------------------------------------------------------
//-- APP --
//------------------------------------------------------------------------------

export default function MyApp({ Component, pageProps }) {
    return (
        <SSRProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SSRProvider>
    );
}
