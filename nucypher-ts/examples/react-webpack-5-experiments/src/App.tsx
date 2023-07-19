import { Alice, Bob, EnactedPolicy, SecretKey } from '@nucypher/nucypher-ts';
import { ethers } from 'ethers';
import React from 'react';
import { useEffect, useState } from 'react';

declare let window: any;

function toHexString(byteArray: Uint8Array) {
  return Array.from(byteArray, function (byte) {
    return ('0' + (byte & 0xff).toString(16)).slice(-2);
  }).join('');
}

export function App() {
  const [provider, setProvider] = useState(undefined as ethers.providers.Web3Provider | undefined);
  const [alice, setAlice] = useState(undefined as Alice | undefined);
  const [bob, setBob] = useState(undefined as Bob | undefined);
  const [policy, setPolicy] = useState(undefined as EnactedPolicy | undefined);

  const loadWeb3Provider = async () => {
    if (!window.ethereum) {
      console.error('You need to connect to the MetaMask extension');
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');

    const { chainId } = await provider.getNetwork();
    if (chainId !== 5) {
      console.error('You need to connect to the Goerli test network');
    }

    await provider.send('eth_requestAccounts', []);
    setProvider(provider);
  };

  const config = {
    // Public Porter endpoint on Tapir network
    porterUri: 'https://porter-tapir.nucypher.community',
  }

  const makeAlice = () => {
    if (!provider) {
      return;
    }
    const secretKey = SecretKey.fromBytes(Buffer.from('fake-secret-key-32-bytes-alice-x'));
    const alice = Alice.fromSecretKey(config, secretKey, provider);
    setAlice(alice);
  };

  const makeBob = () => {
    const secretKey = SecretKey.fromBytes(Buffer.from('fake-secret-key-32-bytes-bob-xxx'));
    const bob = Bob.fromSecretKey(config, secretKey);
    setBob(bob);
  };

  const makeRemoteBob = (bob: Bob) => {
    const { decryptingKey, verifyingKey } = bob;
    return { decryptingKey, verifyingKey };
  };

  const makeCharacters = () => {
    makeAlice();
    makeBob();
    setPolicy(undefined);
  };

  const getRandomLabel = () => `label-${new Date().getTime()}`;

  const runExample = async () => {
    if (!alice || !bob) {
      return;
    }
    const remoteBob = makeRemoteBob(bob);
    const threshold = 2;
    const shares = 3;
    const startDate = new Date();
    const endDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30); // In 30 days
    const policyParams = {
      bob: remoteBob,
      label: getRandomLabel(),
      threshold,
      shares,
      startDate,
      endDate,
    };

    const policy = await alice.grant(
      policyParams,
      [],
      []
    );

    console.log('Policy created');
    setPolicy(policy);
  };

  useEffect(() => {
    loadWeb3Provider();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="stack left">
          <div>
            <div>Create Alice and Bob</div>
            <button onClick={(e) => makeCharacters()}>Go</button>
            <div>
              {alice && (
                <span>
                  Alice: {`0x${toHexString(alice.verifyingKey.toBytes())}`}
                </span>
              )}
            </div>
            <div>
              {bob && (
                <span>
                  Bob: {`0x${toHexString(bob.verifyingKey.toBytes())}`}
                </span>
              )}
            </div>
          </div>

          {alice && bob && (
            <div>
              <div>Create a policy</div>
              <button onClick={(e) => runExample()}>Go</button>
            </div>
          )}

          {policy && (
            <div>
              <div>
                Policy id: <div>{toHexString(policy.id.toBytes())}</div>
              </div>
              <div>
                Policy: <div>{JSON.stringify(policy)}</div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
