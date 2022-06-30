export interface IWalletState {
    address: string | undefined,
    balanceBNB: number | string | undefined,
    balanceBUSD: number | null | undefined,
    networkError?: null | number
    connect?: boolean
    walletInfo?: any
}

export interface IRegister {
    price: string
    referral: string | undefined
    payload?: any
}

export interface IRegisterAction {
    type: string,
    payload: IRegister
}

export interface IWalletInfo{
    address: string | undefined,
    balanceBNB: number | string | undefined,
    
}

export enum ActionType {
    CONNECT_WALLET = 'CONNECT_WALLET',
    CONNECT_ERROR = 'CONNECT_ERROR',
    CONNECT_SUCCESS = 'CONNECT_SUCCESS',

    LOG_IN = 'LOG_IN',
    REGISTER = 'REGISTER',
    
    AVALABLE_ROUND = 'AVALABLE_ROUND',

    RESET_STATE = 'RESET_STATE'
}

export interface IDispatch {
    type: string,
    payload: {}
}

export interface IConnectWalletAction {
    type: ActionType.CONNECT_WALLET;
}

export interface IConnectErrorAction {
    type: ActionType.CONNECT_ERROR
    payload: string
}

export interface IConnectAction {
    type: string,
    payload: IWalletState
}

export interface ILoginAction {
    type: string,
    payload: GetUserDate
}

export interface IInfoAboutRound  {
    active: boolean[],
    payouts: number[],
    maxPayouts: number[],
    activationTimes: number[],
    rewardSum: number[],
    referralPayoutSum: number[]
}

export interface UsersInformation {
    id: number,
    registrationTimestamp: number,
    referrer: string,
    referrals: number,
    referralPayoutSum: number,
    roundsRewardSum: number,
    missedReferralPayoutSum: number,
    maxRound: number,
    turnover: number
}

export interface ILoginAction {
    type: string,
    payload: GetUserDate
}


export interface UsersInformation {
    id: number,
    registrationTimestamp: number,
    referrer: string,
    referrals: number,
    referralPayoutSum: number,
    roundsRewardSum: number,
    missedReferralPayoutSum: number,
    maxRound: number,
    turnover: number
}

export interface GetUserDate {
    id: number,
    registrationTimestamp: number,
    referrer: string,
    referrals: number,
    referralPayoutSum: number,
    roundsRewardSum: number,
    missedReferralPayoutSum: number,
    maxRound: number,
    turnover: number
}

export type ConnectAction = IConnectWalletAction | IConnectErrorAction