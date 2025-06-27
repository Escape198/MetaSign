import React, { useState } from "react";
import { EthereumService } from "../services/ethereum";

const ethereumService = new EthereumService();

export const SignMessage: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [signature, setSignature] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSign = async () => {
    setError(null);
    setSignature(null);

    if (!message.trim()) {
      setError("Enter your message.");
      return;
    }

    try {
      const sig = await ethereumService.signMessage(message);
      setSignature(sig);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error.");
      }
    }
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <textarea
        rows={3}
        placeholder="Enter a message for the signature"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: "100%" }}
      />
      <br />
      <button onClick={handleSign} className="button" style={{ marginTop: "0.5rem" }}>
        Sign the message
      </button>
      {error && (
        <div style={{ color: "red", marginTop: "0.5rem" }}>
          {error}
        </div>
      )}
      {signature && (
        <div style={{ marginTop: "0.5rem" }}>
          ✅ Signature:
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
            {signature}
          </pre>
        </div>
      )}
    </div>
  );
};
