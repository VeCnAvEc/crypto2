import { useState } from "react";
import { ModalSellcetWallet } from "../ModalWithWallet/ModalSellcetWallet";
// onClick={ConnectWallet}

export const Connect = () => {
    const [activeModal, setActiveModal] = useState(false)

        return (
            <div className="board_btn flex__align">
                <div className="btn" onClick={() => setActiveModal(true)}>
                    <span className="icon icon-wallet">Connect wallet</span>
                </div>
                {activeModal ? <ModalSellcetWallet active={activeModal} setActive={setActiveModal}/> : null}
                <div className="btn btn-active">
                    <span className="icon icon-help">Help Me</span>
                </div>
            </div>
        )
}