import { useState } from "react";
import { ModalWindow } from "../ModalWindow/ModalWindow";

export const Start = () => {
    const [active, setActive] = useState(false)

    return (            
        <div className="btn">
            <span className="icon icon-wallet" onClick={() => setActive(true)}>Fast Registration or log in</span>
            <ModalWindow active={active} setActive={setActive}/>
        </div>
    )
}