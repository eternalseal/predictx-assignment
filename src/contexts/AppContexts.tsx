import React, { useState, useCallback, createContext } from "react";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers } from "ethers";

export interface WalletContextValues {
  account: string;
  provider: Maybe<providers.Web3Provider>;
  networkId: number;
  connect: any;
  disconnect?: any;
}

const WalletContext = createContext<WalletContextValues>({
  account: "",
  provider: null,
  networkId: 97,
  connect: null,
  disconnect: null,
});

const web3Modal = new Web3Modal();

const WalletProvider: React.FC = ({ children }) => {
  const [provider, setProvider] = useState<any>();
  const [account, setAccount] = useState("");
  const [networkId, setNetworkId] = useState(97);

  const connect = useCallback(async () => {
    const provider = await web3Modal.connect();
    const _provider = new providers.Web3Provider(provider);
    setProvider(_provider);

    const _signer = await _provider.getSigner();
    const _account = await _signer.getAddress();
    setAccount(_account);

    const _networkId = (await _provider.getNetwork()).chainId;
    setNetworkId(_networkId);
  }, []);

  const disconnect = useCallback(() => {
    web3Modal.clearCachedProvider();
    setProvider(null);
    setAccount("");
  }, []);

  return (
    <WalletContext.Provider
      value={{
        account,
        provider,
        networkId,
        connect,
        disconnect
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export { WalletContext };

export default WalletProvider;
