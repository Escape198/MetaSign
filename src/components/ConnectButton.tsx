import React, { useState } from "react";
import { EthereumService } from "../services/ethereum";

const ethereumService = new EthereumService();

export const ConnectButton: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleConnect = async () => {
    setError(null);
    try {
      const addr = await ethereumService.connect();
      setAccount(addr);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error.");
      }
    }
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      {account ? (
        <div>
          ✅ Connected: <b>{account}</b>
        </div>
      ) : (
        <button onClick={handleConnect} className="button">
          Connect Metamask
        </button>
      )}
      {error && (
        <div style={{ color: "red", marginTop: "0.5rem" }}>
          {error}
        </div>
      )}
    </div>
  );
};
