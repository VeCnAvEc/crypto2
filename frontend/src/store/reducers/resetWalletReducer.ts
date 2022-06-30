import { ActionType, IConnectAction, IWalletState } from "../../types/type";


export const initialState: IWalletState = {
    address: '0x00...000',
    balanceBNB: 0.000,
    balanceBUSD: 0.000,
    networkError: null,
    connect: false
}

export const resetWallet = (state = initialState, action: IConnectAction): IWalletState => {
    switch (action.type) {        
        case ActionType.RESET_STATE:
            return {
                ...state,
            }
        default: 
            return state
    }
}