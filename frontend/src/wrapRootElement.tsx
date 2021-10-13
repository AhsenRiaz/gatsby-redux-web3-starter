import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import { Web3ReactProvider } from "@web3-react/core";
import {getLibrary} from "./web3-config"

export default ({ element }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary} >
      <Provider store={store}>{element}</Provider>
    </Web3ReactProvider>
  );
};
