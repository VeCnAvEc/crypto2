import { UsersInformation } from "../../types/type";
import { connectToSmartContract } from "./contractAddress";
import { getAddress } from "./getAddress";

export const LogInToAccount = async(): Promise<UsersInformation> => {
    const contract = connectToSmartContract()

    const address = await getAddress()
    const accountInfo = await contract.users(address[0])

    return {
        id: Number(accountInfo.id),
        registrationTimestamp: Number(accountInfo.registrationTimestamp),
        referrer: String(accountInfo.referrer),
        referrals: Number(accountInfo.referrals),
        referralPayoutSum: Number(accountInfo.referralPayoutSum),
        roundsRewardSum: Number(accountInfo.roundsRewardSum),
        missedReferralPayoutSum: Number(accountInfo.missedReferralPayoutSum),
        maxRound: Number(accountInfo.maxRound),
        turnover: Number(accountInfo.turnover),
    }   
} 