import styles from "../../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import { useSigner, useNetwork, useBalance } from 'wagmi';
import { useState, useEffect } from 'react';
import WalletComponent from "../walletInfo/WalletInfo";
import { fetchBody } from "../hook/fetch";
import { ethers } from 'ethers';
import * as tokenJson from '../../assets/MyToken.json';
import * as tokenizedBallotJson from '../../assets/TokenizedBallot.json';

export function WinningProposalComponent() {
    return (
        <div>
            <WinningProposal></WinningProposal>
        </div>
    )
}

function WinningProposal() {
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
            <p>The winning proposition is {txData}</p>
        </>
    );

    // list of arguments
    if (signer) return (
        <>
            <h2>Current Winning Proposal</h2>
            <p><button
                onClick={() => winningProposal(
                    signer,
                    TokenizedBallotContract,
                    setLoading,
                    setTxData,
                )}>Query Result
            </button></p>
        </>
    );

}

function winningProposal(
    signer, 
    TokenizedBallotContract,
    setLoading,
    setTxData,
) {
    setLoading(true);
    TokenizedBallotContract.connect(signer).winningProposal()
        .then((data) => { // <-- Add the parameter to capture the returned data
            setTxData(data);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        });
}
