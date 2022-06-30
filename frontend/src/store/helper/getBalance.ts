import { ethers } from "ethers"

export const getBalance = async(sellectedAddress: Promise<string> | string) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    return await provider.getBalance(sellectedAddress)
}