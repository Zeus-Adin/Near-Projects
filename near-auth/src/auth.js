import * as nearAPI from "near-api-js"

const { connect, keyStores, WalletConnection } = nearAPI;

export async function authenticate(){
    const connectionConfig = {
        networkId: "testnet",
        keyStore: new keyStores.BrowserLocalStorageKeyStore(),
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org",
        };
    // connect to NEAR
    const nearConnection = await connect(connectionConfig);
    // create wallet connection
    const walletConnection = new WalletConnection(nearConnection);
    // const walletConnection = new WalletConnection(nearConnection);
    walletConnection.requestSignIn(
        "example-contract.testnet", // contract requesting access
        "Near Auth", // optional title
        "http://localhost:3000/", // optional redirect URL on success
        "http://localhost:3000/fairlure" // optional redirect URL on failure
    );
}