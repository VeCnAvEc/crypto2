import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as WalletActionCreater from "../store/action-creators/actionCreatetor"

export const useActions = () => {
    const disptach = useDispatch()
    return bindActionCreators(WalletActionCreater, disptach)
}