import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import Layout from "../Layout";
const Home = () => {
  const { account, active, chainId, library ,  } = useWeb3React();
    console.log(library._network.name)
  return (
    <Layout>
      {active ? <h1>{account}</h1> : <h1>Not Connected</h1>}
      {active ? <h1>{chainId}</h1> : <h1>No Chain Id</h1>}
      {active ? <h1>{library.connection.url}</h1>  : <h1>No Wallet connected</h1> }
      {active ?  <h1>{library._network.name}</h1> : <h1>No Network Connected</h1> }
    </Layout>
  );
};

export default Home;
