import { useActions } from '../../../hook/useAction'
import './ModalSellectWallet.scss'

export const ModalSellcetWallet = (props: {active: boolean, setActive: any}) => {
    const { fetchWallet, resetState } = useActions()

    const ConnectWallet = () => {
        fetchWallet()
    }
     
    window.ethereum.on('accountsChanged', ([newAddress]: string[]) => {
        resetState()
        fetchWallet()
    })

    if (props.active) {
        return (
            <div className="modalWindow"  onClick={() => props.setActive(false)}>
                <div className="modal__info" onClick={(e) => e.stopPropagation()}>
                    <div className="modal__title">
                        <p className='title'>Connect Wallet</p>
                    </div>
                    <div className="modal__wallet">
                        <div className="modal__walletName" onClick={() => ConnectWallet()}>
                            <p className='wallet__name'>MetaMask</p>
                            <p className='wallet__discription'>Desktop / DApp in app</p>
                        </div>
                    </div>
                    <div className="modal__help">
                        <p className="qust">Got questions?</p>
                        <p className="sup">Contact support</p>
                    </div>
                </div>
        </div>
        )
    } else {
        return <></>
    }

}