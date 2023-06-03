import styles from "../../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import { useSigner, useNetwork, useBalance } from 'wagmi';
import { useState, useEffect } from 'react';
import WalletComponent from "../walletInfo/WalletInfo";

function delegateTokens() {
    const pKey = this.configService.get<string>('PRIVATE_KEY_SANGOKU');
  
    const wallet = new ethers.Wallet(pKey);

    const signer = wallet.connect(this.provider);

    const delegateTx = this.tokenContract.connect(signer).delegate(addressRECEIVER);

    // this.awaitTx(delegateTx);

    return delegateTx

  }