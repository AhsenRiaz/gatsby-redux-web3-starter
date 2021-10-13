import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import MetaMaskOnboarding from "@metamask/onboarding";
import { metaMask } from "../../web3-config";
import { useAppDispatch } from "../../redux/store";
import { login, logout } from "../../redux/slice/authSlice";
import {Web3ReactContextInterface} from "@web3-react/core/dist/types";

declare global {
  interface Window {
    ethereum: any;
  }
}

const MetaMaskLogin = () => {
 
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [check , setCheck] = useState<boolean>(false)

  const {
    connector,
    library,
    account,
    chainId,
    activate,
    deactivate,
    active,
    error,
    setError,
  }:Web3ReactContextInterface = useWeb3React();


  const installMetamask = () => {
    console.log("install metamask");
    try {
      const onBoarding =
        typeof window.ethereum !== "undefined" && new MetaMaskOnboarding();
      typeof window.ethereum !== "undefined" &&
        onBoarding &&
        onBoarding.startOnboarding();
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  const connect = async () => {
    console.log("Connect");
    try {
      setLoading(true);
      await activate(metaMask);
      console.log(" Connecting Metamask ==> ");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  const handleSubmit = () => {
    try {
      setLoading(true);
      if (
        typeof window.ethereum !== "undefined" &&
        MetaMaskOnboarding.isMetaMaskInstalled() &&
        account
      ) {
        dispatch(login());

      }
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  const handleAuth = () => {
    if (typeof window.ethereum !== "undefined") {
      MetaMaskOnboarding.isMetaMaskInstalled() && !active && connect();
      MetaMaskOnboarding.isMetaMaskInstalled() && active && handleSubmit();
      !MetaMaskOnboarding.isMetaMaskInstalled() && installMetamask();
    }
  };



  return (
    <div>
      <Button
        onClick={handleAuth}
        style={{ backgroundColor: "green", color: "white" }}
      >
        {!active ? "Connect" : "Connected"}
      </Button>
    </div>
  );
};

export default MetaMaskLogin;
