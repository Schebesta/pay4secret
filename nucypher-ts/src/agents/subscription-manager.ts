import {
  BigNumber,
  ContractTransaction,
  ethers,
  utils as ethersUtils,
} from 'ethers';

import {
  SubscriptionManager,
  SubscriptionManager__factory,
} from '../../types/ethers-contracts';
import { ChecksumAddress } from '../types';
import { Web3Provider } from '../web3';

import { DEFAULT_WAIT_N_CONFIRMATIONS, getContracts } from './contracts';

export class SubscriptionManagerAgent {
  public static async createPolicy(
    web3Provider: Web3Provider,
    valueInWei: BigNumber,
    policyId: Uint8Array,
    size: number,
    startTimestamp: number,
    endTimestamp: number,
    ownerAddress: ChecksumAddress
  ): Promise<ContractTransaction> {
    const SubscriptionManager = await this.connect(
      web3Provider.provider,
      web3Provider.signer
    );
    const overrides = {
      value: valueInWei.toString(),
    };
    const estimatedGas = await SubscriptionManager.estimateGas.createPolicy(
      ethersUtils.hexlify(policyId),
      ownerAddress,
      size,
      startTimestamp,
      endTimestamp,
      overrides
    );
    const tx = await SubscriptionManager.createPolicy(
      ethersUtils.hexlify(policyId),
      ownerAddress,
      size,
      startTimestamp,
      endTimestamp,
      { ...overrides, gasLimit: estimatedGas }
    );
    await tx.wait(DEFAULT_WAIT_N_CONFIRMATIONS);
    return tx;
  }

  public static async getPolicyCost(
    provider: ethers.providers.Provider,
    size: number,
    startTimestamp: number,
    endTimestamp: number
  ): Promise<BigNumber> {
    const SubscriptionManager = await this.connect(provider);
    return await SubscriptionManager.getPolicyCost(
      size,
      startTimestamp,
      endTimestamp
    );
  }

  private static async connect(
    provider: ethers.providers.Provider,
    signer?: ethers.providers.JsonRpcSigner
  ): Promise<SubscriptionManager> {
    const network = await provider.getNetwork();
    const contractAddress = getContracts(network.chainId).SUBSCRIPTION_MANAGER;
    return SubscriptionManager__factory.connect(
      contractAddress,
      signer ?? provider
    );
  }
}
