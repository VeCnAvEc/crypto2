import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useActions } from "../../../hook/useAction"
import { LogInToAccount } from "../../../store/helper/logIn"

export const LogIn = () => {
    const [register, setRegister] = useState('')

    const { logInAccount } = useActions()
    const navigate = useNavigate()

    return (
        <div className='modal_block4 block' onClick={() => {
            (async () => {
                const state = await LogInToAccount()
                logInAccount(state)
                console.log(state);
                if ( state.id !== 0 ) {
                    navigate('/game')
                } else {
                    setRegister('You have not been registered')
                    setTimeout(() => {
                        setRegister('')
                    }, 5000)
                }
            })()
        }}>
            <label className="error">{register !== '' ? register : null}
                <button className='registration' type='submit'>Log in!</button>
            </label>
        </div>
    ) 
}