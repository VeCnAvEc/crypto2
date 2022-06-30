import { Dispatch } from "react"
import { ActionType, IDispatch, IInfoAboutRound, UsersInformation } from "../../types/type"
import { getBalance } from "../helper/getBalance"

export const fetchWallet = () => {
    return async (disptach: Dispatch<any>) => {
        const [sellectedAddress] = await window.ethereum.request({
            method: 'eth_requestAccounts'
        })      

        try {
            if(!window.ethereum) {
                disptach({type: ActionType.CONNECT_ERROR, payload: {
                    networkError: 'Please install MetaMask'
                }})
            } else {
                disptach({type: ActionType.CONNECT_WALLET, payload: {
                    address: sellectedAddress,
                    balanceBNB: Number(await getBalance(sellectedAddress)),
                    connect: true
                }})
            }
        }catch(e: any) {
            console.log(e);
        }
    }
}

export const resetState = () => {
    return async (dispatch: Dispatch<any>) => {
        dispatch({type: ActionType.RESET_STATE})
    }
}


export const registerAndBuyRound = (price: string, refferal: string = '0') => {
    return async (disptach: Dispatch<any>) => {
        disptach({type: ActionType.REGISTER, payload: {
            price,
            refferal
        }})
    }
}

export const logInAccount = (state: any) => {
    return async (dispatch: Dispatch<any>) => {
        dispatch({type: ActionType.LOG_IN, payload: {
            state
        }})
    }
}

export const availableRound = (informationAboutRound: any) => {
    return async (disptach: Dispatch<IDispatch>) => {
        console.log('informationAboutRound: ', informationAboutRound);
        disptach({type: ActionType.AVALABLE_ROUND, payload: {
            informationAboutRound
        }})
    }
}