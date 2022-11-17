import { AuthProvider } from "../context/AuthContext";
import { ModalProvider } from "../context/ModalContext";
import { NewCampanhaProvider } from "../context/NewCampanhaContext";
import { ApadrinheProvider } from "../context/ApadrinheContext";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import FooterCopy from "../components/FooterDevBy";


import "../../styles/animations.scss";
import "../../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <ApadrinheProvider>
          <ModalProvider>
            <NewCampanhaProvider>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <FooterCopy />
            </NewCampanhaProvider>
          </ModalProvider>
        </ApadrinheProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
