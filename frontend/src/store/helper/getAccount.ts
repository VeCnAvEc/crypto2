import { IInfoAboutRound } from "../../types/type";
import { connectToSmartContract } from "./contractAddress";
import { getAddress } from "./getAddress";

export const getRound = async(): Promise<IInfoAboutRound> => {
    const contract = connectToSmartContract() 
    const address = await getAddress()

    let accountInfo = await contract.getUserrounds(address[0])

    return {
      active: accountInfo[0],
      payouts: accountInfo[1],
      maxPayouts: accountInfo[2],
      activationTimes: accountInfo[3],
      rewardSum: accountInfo[4],
      referralPayoutSum: accountInfo[5]
    }
}