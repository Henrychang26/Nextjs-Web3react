import "../styles/globals.css";
import { web3ReactProvider } from "@web3-react/core";
import { Web3Provider, web3Provider } from "@ethersproject/providers";

const getLibrary = (provider) => {
  return new Web3Provider(provider);
};

function MyApp({ Component, pageProps }) {
  return (
    <Web3Provider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3Provider>
  );
}

export default MyApp;
