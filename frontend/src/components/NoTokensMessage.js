import React from "react";

export function NoTokensMessage({ selectedAddress }) {
  return (
    <>
      <p>You don't have tokens to transfer</p>
      <p>
        To get some TARA tokens, go to the{" "}
        <a
          href="https://testnet.explorer.taraxa.io/faucet"
          target="_blank"
          rel="noreferrer"
        >
          Official Taraxa Testnet Faucet
        </a>
      </p>
      <p>
        To get some HHT tokens, run
        <br />
        <br />
        <code>npx hardhat --network testnet faucet {selectedAddress}</code>
      </p>
    </>
  );
}
