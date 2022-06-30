import { combineReducers } from "redux";
import { walletReducer } from "./connectWalletReducer";
import { loginReducer } from "./loginReducer";
import { openLevels } from "./openLevelsReducer";
import { register } from "./registerReducer";
import { resetWallet } from "./resetWalletReducer";

export const rootReducer = combineReducers({
    connectWallet: walletReducer,
    resetWallet: resetWallet,
    register: register,
    logIn: loginReducer,
    rounds: openLevels
})

export type RootState = ReturnType<typeof rootReducer>