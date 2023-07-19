const wallet = document.getElementById("wallet");
const payButton = document.getElementById("pay");
const secret = document.getElementById("secret");

payButton.addEventListener("click", () => {
  // Get the user's wallet address.
  const address = wallet.value;

  // Send a $5 USDC payment to the user's address.
  const payment = {
    amount: 5,
    currency: "USDC",
    recipient: address,
  };

  // Check for the payment on the Polygon blockchain.
  const rpcUrl = "https://polygon-rpc.com";
  const web3 = new Web3(rpcUrl);
  const receipt = await web3.eth.getTransactionReceipt(payment.hash);

  // Reveal the secret if the payment is successful.
  if (receipt) {
    secret.innerHTML = "The payment was successful!";
  } else {
    secret.innerHTML = "The payment failed.";
  }
});


const wallet = document.getElementById("wallet");
const connectWalletButton = document.getElementById("connect-wallet");

connectWalletButton.addEventListener("click", () => {
  // Connect the user's wallet.
  const provider = new WalletConnectProvider();
  provider.connect();

  // Get the user's wallet address.
  const address = provider.getAddress();
  wallet.value = address;
});