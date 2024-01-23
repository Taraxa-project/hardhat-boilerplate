import React from "react";

export function NoTokensMessage({ selectedAddress }) {
  return (
    <>
      <p>You don't have tokens to transfer</p>
      <p>
        To get some tokens, go to the{" "}
        <a
          href="https://testnet.explorer.taraxa.io/faucet"
          target="_blank"
          rel="noreferrer"
        >
          Official Taraxa Testnet Faucet
        </a>
      </p>
    </>
  );
}
