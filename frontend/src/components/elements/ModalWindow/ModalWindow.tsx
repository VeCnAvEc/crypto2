import './ModalWindow.scss'
import { motion } from "framer-motion";
import { LogIn } from '../LogIn/LogIn';
import { useState } from 'react';
import { useActions } from '../../../hook/useAction';
import { Register } from '../../../store/helper/registerAndBuyLvl';
import { useNavigate } from 'react-router-dom';
import { connectToSmartContract } from '../../../store/helper/contractAddress';
import { getAddress } from '../../../store/helper/getAddress';
import { useTypeSelector } from '../../../hook/useTypedSelector';
import { getRound } from '../../../store/helper/getAccount';

export const ModalWindow = (props: {active: boolean, setActive: any}) => {
    const [price, setPrice] = useState('0');
    const [referrer, setReferral] = useState('')
    const [accountExisting, setAccountExisting] = useState('')

    const { registerAndBuyRound } = useActions()
    const navigate = useNavigate()

    const contract = connectToSmartContract()

    if (props.active) {
        return (
            <div className="modalWindow" onClick={() => props.setActive(false)}>
                <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                    <div className='modal_block1 block'>
                        <p className='text'></p>
                    </div>
                    <p>Registration</p>

                    <div className='modal_block2 block'>
                    <form name="recipient">
                    <motion.select className="input" onChange={(e) => {
                        let value: string = e.target.value
                        setPrice(value)
                        registerAndBuyRound(value, referrer)
                    }}>
                        <label className='error'></label>
                            <option className='drop' value="0">0 level 0 BNB</option>
                            <option className='drop' value="0.05">1 level 0.05 BNB</option>
                            <option className='drop' value="0.08">2 level 0.08 BNB</option>
                            <option className='drop' value="0.13">3 level 0.13 BNB</option>
                            <option className='drop' value="0.22">4 level 0.22 BNB</option>
                            <option className='drop' value="0.33">5 level 0.33 BNB</option>
                            <option className='drop' value="0.5">6 level 0.5 BNB</option>
                            <option className='drop' value="0.7">7 level 0.7 BNB</option>
                            <option className='drop' value="1.05">8 level 1.05 BNB</option>
                            <option className='drop' value="1.45">9 level 1.45 BNB</option>
                            <option className='drop' value="1.95">10 level 1.95 BNB</option>
                            <option className='drop' value="2.4">11 level 2.4 BNB</option>
                            <option className='drop' value="3.5">12 level 3.5 BNB</option>
                            <option className='drop' value="5.2">13 level 5.2 BNB</option>
                            <option className='drop' value="7.3">14 level 7.3 BNB</option>
                            <option className='drop' value="10">15 level 10 BNB</option>
                        </motion.select>
                    </form>
                    </div>
                    <div className='modal_block3 block'>
                        <label className='error'>
                            <input type="text" placeholder='Write address referrer' className='discription' onChange={(e: any) => {
                                let value: string = e.target.value 
                                setReferral(value)
                                registerAndBuyRound(price, value)
                            }}/>
                        </label>
                    </div>
                    <div className='modal_block4 block'>
                        <label className='error'>{accountExisting}
                        <button className='registration' type='submit' onClick={() => {
                            (async () => {
                                const address = await getAddress()
                                const accountInfo = await contract.users(address[0]) 
                                const id =  Number(accountInfo.id)

                                if(id !== 0) {
                                    setAccountExisting(`You are already registered, please log in`)
                                } else {
                                    await Register(price, referrer)
                                }

                                if( Number(id !== 0) ) {
                                    navigate('/game')
                                }
                            })()
                        }}>Register!</button>
                        </label>

                    </div>
                    <div className="modal_block4 block">
                        <LogIn />
                    </div>
                </div>
            </div>
        )
    } else {
        return <></>
    }
}