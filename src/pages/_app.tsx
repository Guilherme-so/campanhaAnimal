import { AuthProvider } from "../context/AuthContext";
import { ModalProvider } from "../context/ModalContext";
import { NewCampanhaProvider } from "../context/NewCampanhaContext";
import { ApadrinheProvider } from "../context/ApadrinheContext";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import FooterGetHash from "../components/FooterGetHash";


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
            <FooterGetHash />
            </NewCampanhaProvider>
          </ModalProvider>
        </ApadrinheProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
