import { ActionType, IRegister, IRegisterAction } from "../../types/type";


export const initialState: IRegister = {
    price: '0',
    referral: undefined
}

export const register = (state = initialState, action: IRegisterAction): IRegister => {
    switch(action.type) {
        case ActionType.REGISTER:
            return {
                ...state,
                payload: action.payload
            }
        default:
            return state
    }
}