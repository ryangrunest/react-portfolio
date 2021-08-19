import { Provider } from "react-redux";
import { useEffect } from "react";
import { useStore } from "../store";
import TagManager from "react-gtm-module";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const tagManagerArgs = {
    gtmId: "GTM-KD2TM4M",
  };
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
