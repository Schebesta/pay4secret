import styles from "../../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import { useSigner, useNetwork, useBalance } from 'wagmi';
import { useState, useEffect } from 'react';
import WalletComponent from "../walletInfo/WalletInfo";
import { fetchBody } from "../hook/fetch";
import { ethers } from 'ethers';
import * as tokenJson from '../../assets/MyToken.json';
import * as tokenizedBallotJson from '../../assets/TokenizedBallot.json';

const TOKEN_ADDRESS="0xB6501b20Db186BBe42D7b50624AcBbdFAF20525a"
const BALLOT_ADDRESS="0xAb4a059e83B3bFB731CfDE1DA0dC4d54fdF0a66E"


export function QueryResultComponent() {
    return (
        <div>
            <QueryResult></QueryResult>
        </div>
    )
}

function QueryResult() {
    const { data: signer } = useSigner();
    const [txData, setTxData] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const chainId = 80001
    const provider = new ethers.providers.AlchemyProvider(chainId, process.env.ALCHEMY_API_KEY);

    // const contractAddressToken = `${process.env.TOKEN_ADDRESS}`
    // const contractAddressTokenizedBallot = `${process.env.BALLOT_ADDRESS}`


    const handleInputProposal = (event) => {
        setProposal(event.target.value);
    };

    const handleInputVote = (event) => {
        setVotedAmount(event.target.value);
    };

    const TokenizedBallotContract = new ethers.Contract(
        BALLOT_ADDRESS,
        tokenizedBallotJson.abi,
        provider
    );

    if (isLoading) return (
        <>
            <p>Querying Result ...</p>
        </>
    );

    if (txData) return (
        <>
            <p>The winning proposition is : {ethers.utils.parseBytes32String(txData)}</p>
        </>
    );

    // list of arguments
    if (signer) return (
        <>
            <h2>Winner Proposal Name</h2>
            <p><button
                onClick={() => queryResult(
                    signer,
                    TokenizedBallotContract,
                    setLoading,
                    setTxData,
                )}>Query Result
            </button></p>
        </>
    );

}

function queryResult(
    signer, 
    TokenizedBallotContract,
    setLoading,
    setTxData,
) {
    setLoading(true);
    TokenizedBallotContract.connect(signer).winnerName()
        .then((data) => { // <-- Add the parameter to capture the returned data
            setTxData(data);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        });
}
