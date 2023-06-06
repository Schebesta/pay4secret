import styles from "../../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import { useSigner, useNetwork, useBalance } from 'wagmi';
import { useState, useEffect } from 'react';
import WalletComponent from "../walletInfo/WalletInfo";
import { fetchBody } from "../hook/fetch";
import { ethers } from 'ethers';
import * as tokenJson from '../../assets/MyToken.json';
import * as tokenizedBallotJson from '../../assets/TokenizedBallot.json';

import * as dotenv from "dotenv";
dotenv.config();


const TOKEN_ADDRESS="0xB6501b20Db186BBe42D7b50624AcBbdFAF20525a"
const BALLOT_ADDRESS="0xAb4a059e83B3bFB731CfDE1DA0dC4d54fdF0a66E"


export function QueryResultEx1() {
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
    const [Proposal, setProposal] = useState('');
    const [VotedAmount, setVotedAmount] = useState('')

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
            <p>Send Casting Transaction ...</p>
        </>
    );


    if (txData) return (

        <>

            <p>Vote is done <p>Transaction at:  <a href={"https://mumbai.polygonscan.com/tx/" + txData.hash} target="_blank">{txData.hash}</a> </p> : <p></p> </p>
            {/* <p>The Voting Transaction is {txData}</p> */}
            {/* <p>Voted for the proposal : {Proposal}</p> */}
        </>
    );



    // list of arguments
    if (signer) return (
        <>
            <p><input type="text" value={Proposal} onChange={handleInputProposal} />Proposal Number</p>
            <p><input type="text" value={VotedAmount} onChange={handleInputVote} />Voted Amount</p>
            <p><button
                onClick={() => QueryResult(
                    signer,
                    TokenizedBallotContract,
                    Proposal,
                    ethers.utils.parseUnits(VotedAmount),
                    setLoading,
                    setTxData,
                )}>Send Vote
            </button></p>
        </>
    );

}

function QueryResult(
    signer,
    TokenizedBallotContract,
    Proposal,
    VotedAmount,
    setLoading,
    setTxData,
) {
    setLoading(true);
    TokenizedBallotContract.connect(signer).vote(Proposal, VotedAmount)
        .then((data) => { // <-- Add the parameter to capture the returned data
            setTxData(data);
            setLoading(false);
            console.log("VoteCasted");
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
}
