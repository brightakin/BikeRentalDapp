import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import BikeRental from "../artifacts/contracts/BikeRental.sol/BikeRental.json";

export const Dapp = () => {
  const [selectedBike, setSelectedBike] = useState(null);
  let contract;

  useEffect(() => {}, []);

  const checkOut = async () => {
    if (window.ethereum !== "undefined") {
      console.log(window.ethereum.isConnected());
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const Address = "0x421B3b81f368b251a44292400aC54Ac42484552d";
      const ABI = BikeRental.abi;
      const signer = provider.getSigner();
      contract = new ethers.Contract(Address, ABI, signer);
      // const tx = await contract.addRenter(
      //   "0x421b3b81f368b251a44292400ac54ac42484552d",
      //   "Bright",
      //   "tolu",
      //   false,
      //   true,
      //   0,
      //   0,
      //   0,
      //   0
      // );
      const tx = await contract.checkOut(
        "0x421b3b81f368b251a44292400ac54ac42484552d"
      );
      await tx.wait();
      console.log(tx);
    }
  };

  const checkIn = async () => {
    if (window.ethereum !== "undefined") {
      console.log(window.ethereum.isConnected());
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const Address = "0x421B3b81f368b251a44292400aC54Ac42484552d";
      const ABI = BikeRental.abi;
      const signer = provider.getSigner();
      contract = new ethers.Contract(Address, ABI, signer);
      // const tx = await contract.addRenter(
      //   "0x421b3b81f368b251a44292400ac54ac42484552d",
      //   "Bright",
      //   "tolu",
      //   false,
      //   true,
      //   0,
      //   0,
      //   0,
      //   0
      // );
      const tx = await contract.checkIn(
        "0x421b3b81f368b251a44292400ac54ac42484552d"
      );
      await tx.wait();
      console.log(tx);
    }
  };

  const deposit = async () => {
    if (window.ethereum !== "undefined") {
      console.log(window.ethereum.isConnected());
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const Address = "0x421B3b81f368b251a44292400aC54Ac42484552d";
      const ABI = BikeRental.abi;
      const signer = provider.getSigner();
      contract = new ethers.Contract(Address, ABI, signer);
      // const tx = await contract.addRenter(
      //   "0x421b3b81f368b251a44292400ac54ac42484552d",
      //   "Bright",
      //   "tolu",
      //   false,
      //   true,
      //   0,
      //   0,
      //   0,
      //   0
      // );
      const tx = await contract.deposit(
        "0x421b3b81f368b251a44292400ac54ac42484552d"
      );
      await tx.wait();
      console.log(tx);
    }
  };

  const makePayment = async () => {
    if (window.ethereum !== "undefined") {
      console.log(window.ethereum.isConnected());
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const Address = "0x421B3b81f368b251a44292400aC54Ac42484552d";
      const ABI = BikeRental.abi;
      const signer = provider.getSigner();
      contract = new ethers.Contract(Address, ABI, signer);
      // const tx = await contract.addRenter(
      //   "0x421b3b81f368b251a44292400ac54ac42484552d",
      //   "Bright",
      //   "tolu",
      //   false,
      //   true,
      //   0,
      //   0,
      //   0,
      //   0
      // );
      const tx = await contract.makePayment(
        "0x421b3b81f368b251a44292400ac54ac42484552d"
      );
      await tx.wait();
      console.log(tx);
    }
  };
  const url =
    "data:image/jpeg;base64,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";
  return (
    <div style={{ backgroundColor: "#28A745", height: "100vh", padding: 20 }}>
      <div style={{ flexDirection: "row" }}>
        <div style={{}}>
          <p style={{ color: "white" }}>Bike Rental</p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <p
          style={{
            marginTop: "15%",
            fontSize: 50,
            fontWeight: "bold",
            color: "white",
            width: "50%",
          }}
        >
          Take Control of Ride with Bike Rental!
        </p>
        <img
          style={{
            marginTop: "15%",
            width: "50%",
          }}
          alt="bicycle"
          src={url}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <button
          style={{
            margin: 20,
            borderRadius: 8,
            border: "none",
            height: "5%",
            fontSize: 15,
            width: "10%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            checkOut();
          }}
        >
          <p>CheckOut</p>
        </button>
        <button
          onClick={() => {
            checkIn();
          }}
          style={{
            margin: 20,
            borderRadius: 8,
            border: "none",
            height: "5%",
            fontSize: 15,
            width: "10%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>CheckIn</p>
        </button>
        <button
          onClick={() => {
            deposit();
          }}
          style={{
            margin: 20,
            borderRadius: 8,
            border: "none",
            height: "5%",
            fontSize: 15,
            width: "10%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Deposit</p>
        </button>
        <button
          onClick={() => {
            makePayment();
          }}
          style={{
            margin: 20,
            borderRadius: 8,
            border: "none",
            height: "5%",
            fontSize: 15,
            width: "15%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Make Payment</p>
        </button>
      </div>
    </div>
  );
};
