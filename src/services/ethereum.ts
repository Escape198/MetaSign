import { ethers } from "ethers";

export class EthereumService {
  private provider: ethers.BrowserProvider | null = null;
  private signer: ethers.JsonRpcSigner | null = null;
  private account: string | null = null;

  isMetamaskAvailable(): boolean {
    return typeof window !== "undefined" && !!(window as any).ethereum;
  }

  async connect(): Promise<string> {
    if (!this.isMetamaskAvailable()) {
      throw new Error("Metamask is not installed.");
    }

    this.provider = new ethers.BrowserProvider((window as any).ethereum);
    const accounts = await this.provider.send("eth_requestAccounts", []);

    if (!accounts || accounts.length === 0) {
      throw new Error("Unable to retrieve account.");
    }

    this.account = ethers.getAddress(accounts[0]);
    this.signer = await this.provider.getSigner();

    return this.account;
  }

  getAccount(): string | null {
    return this.account;
  }

  async signMessage(message: string): Promise<string> {
    if (!this.signer) {
      throw new Error("First, connect Metamask..");
    }

    if (!message) {
      throw new Error("The message cannot be empty..");
    }

    const signature = await this.signer.signMessage(message);
    return signature;
  }
}
