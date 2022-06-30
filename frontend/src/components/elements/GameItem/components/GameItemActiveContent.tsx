import { ethers } from 'ethers'
import React from 'react'
import { IGameItemComonProps } from '../GameItem'
import FieldFullfiedl from './FieldFullfiedl'
import ItemButton from './ItemButton'
import ItemLevel from './ItemLevel'
import PartnerBonus from './PartnerBonus'
import ProfitLevel from './ProfitLevel'
import ProgressBar from './ProgressBar'
import TopIcon from './TopIcon'
export interface IGameActiveOptions {
  progress: number
  fullfield: string | number
  bonus: string | number
  profit: string | number
}
interface IGameItemActiveContentProps
  extends IGameItemComonProps,
    IGameActiveOptions {}
const GameItemActiveContent: React.FC<IGameItemActiveContentProps> = ({
  level,
  price,
  progress,
  fullfield,
  bonus,
  profit,
}) => {

  const formatBonus = String(bonus) === 'undefined' ? '00000' : String(bonus)
  const formatProfit = String(profit) === 'undefined' ? '00000' : String(profit)
  const formatFullfield = String(fullfield) === 'undefined' ? '00000' : String(fullfield)

  console.log(formatBonus);
  

  return (
    <>
      <div className="item_elips">
        <TopIcon />
      </div>
      <ItemLevel level={level} price={price} />
      <div className="item_time icon icon-clock">0</div>
      <ProgressBar progress={progress} />
      <FieldFullfiedl value={formatFullfield.split('').length <= 18 ? '0.0' + formatFullfield.slice(0, 3) : Number(formatFullfield) > 999 ? '0.' + formatFullfield.slice(0, 3) : '0.0' + formatFullfield.slice(0, 3)} />
      <div className="item_info">
        <PartnerBonus value={formatBonus.split('').length <= 18 ? '0.0' + formatBonus.slice(0, 3) : Number(formatBonus) > 999 ? '0.' + formatBonus.slice(0, 3) : '0.0' + formatBonus.slice(0, 3)} />
        <ProfitLevel value={formatProfit.split('').length <= 18 ? '0.0' + formatProfit.slice(0, 3) : Number(formatProfit) > 999 ? '0.' + formatProfit.slice(0, 3) : '0.0' + formatProfit.slice(0, 3)} />
      </div>
    </>
  )
}

export default GameItemActiveContent
