import { AppProps } from "next/app";
import { Header } from "../components/Header";
import "../styles/global.scss";
import { Provider as NextAuthProivder } from "next-auth/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProivder session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProivder>
  );
}

export default MyApp;
