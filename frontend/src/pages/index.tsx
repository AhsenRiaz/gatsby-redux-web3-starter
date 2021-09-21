import React, { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../store/store"
import { web3init } from "../store/counter-slice"
import Web3 from "web3"

declare global {
  interface Window {
    ethereum: any;
  }
}



const IndexPage = () => {
  const dispatch = useAppDispatch();
  const {address , web3} = useAppSelector(state => state.connectReducer);

  const connectWallet = () => {
    console.log("button")

    dispatch(web3init())
  }

  return (
    <div>
      <div className="App">
        <h1>address {address ? <h3>{address}</h3> : <h3>Could not find address</h3>}</h1>
        <button onClick={() => connectWallet()}>Connect</button>
      </div >
    </div>
  )
}

export default IndexPage
