import { ethers } from "ethers"
import LotteryWCA_metadata from '../../abi/LotteryWCA_metadata.json'

export const connectToSmartContract = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner(0)

    return new ethers.Contract('0x7866aEB75E804DB317e99C53aF14a162ba43A6c4', LotteryWCA_metadata.abi, signer)
}