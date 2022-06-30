import classNames from 'classnames'
import { ethers } from 'ethers'
import React from 'react'
import { useTypeSelector } from '../../../../hook/useTypedSelector'
import { connectToSmartContract } from '../../../../store/helper/contractAddress'
import { ButtonType } from '../GameItem'

interface IItemButtonProps extends React.HTMLProps<HTMLButtonElement> {
  state: ButtonType,
  price: string | number
  level: number | string
}
const ItemButton: React.FC<IItemButtonProps> = ({
  state,
  price,
  level,
  className,
  style,
  type,
  children,
  ...otherProps
}) => {
  const { rounds } = useTypeSelector(state => state)

  console.log(rounds.account.informationAboutRound[0].forEach((status: any) => {
    console.log(status);
  }));
  

  const buttonContent: { [key in ButtonType]: JSX.Element } = {
    activable: <div className="btn btn-yellow" onClick={async() => {
      const options = {value: ethers.utils.parseEther(String(price))}
      
      connectToSmartContract().buyround(level, options)
    }}>Активировать</div>,
    activated: (
      <div className="btn btn-yellow">
        <span className="icon icon-checked">Активировать</span>
      </div>
    ),
    failed: <div className="btn btn-red">Посмотреть детали</div>,
  }
  return (
    <button style={{...style}} className={classNames("item_btn", className)} {...otherProps}>{buttonContent[state]}</button>
  )
}

export default ItemButton
