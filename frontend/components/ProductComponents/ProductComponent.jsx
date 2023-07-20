import React from 'react';
import './ProductComponent.module.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';


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
    </div>
  );
}

export default ProductComponent;
