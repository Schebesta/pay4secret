import React from 'react';
import './ProductComponent.module.css';

function ProductComponent() {
  return (
    <div className="productContainer">
        <div className="image">
            <img src="https://media.discordapp.net/attachments/1070229591731478599/1131250736513167460/pepe-the-frog-clip-art-frog-removebg-preview.png?width=500&height=500" alt="Sad Rico" border="0" />
        </div>
        <div className="details">
            <h1 className="cost">$50</h1>
            <h3 className="title">Pepe's Secret</h3>
        </div>
        <div className="cardContainer">
            <div className="cryptoDetails">
                <div className="field walletAddress">
                    <label htmlFor="wallet-address">Wallet Address</label>
                    <input type="text" id="wallet-address" placeholder="Wallet Address"/>
                </div>
                <div className="field secretPrice">
                    <label htmlFor="secret-price">Price of Secret</label>
                    <input type="text" id="secret-price" placeholder="Price of Secret"/>
                </div>
                <div>
                    {/* Replace these buttons with your components */}
                    <button className="connectButton">Connect Wallet</button>
                    <button className="uploadButton">Upload Secret</button>
                    <button className="payButton">Pay for Secret</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ProductComponent;
