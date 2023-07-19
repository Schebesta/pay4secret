import styles from "../../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import { useSigner, useNetwork, useBalance } from 'wagmi';
import { useState, useEffect } from 'react';
import WalletComponent from "../walletInfo/WalletInfo";


export function MinterToken() {
    return (
        <div>
                <RequestTokens></RequestTokens>
        </div>
    )
}

function RequestTokens() {
    const { data: signer } = useSigner();
    const [txData, setTxData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    if (txData) return (
        <>
            <p>Transaction completed!</p>
            <a href={"https://mumbai.polygonscan.com/tx/" + txData.hash} target="_blank">{txData.hash}</a>
        </>
    )
    if (isLoading) return (
        <>
            <>Requesting tokens to be minted...
            </>
        </>
    );
    return (
        <>
            <p>Request tokens to be minted</p>
            <button onClick={() => requestTokens(signer, "anything", setLoading, setTxData)}>Request tokens</button>
        </>
    );
}

function requestTokens(signer, signature, setLoading, setTxData) {
    setLoading(true);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address: signer._address, mintValue: "1", signature: signature })
    };

    fetch('http://localhost:3001/request-tokens', requestOptions)
        .then(response => response.json())
        .then((data) => {
            setTxData(data);
            setLoading(false);
        });
}
