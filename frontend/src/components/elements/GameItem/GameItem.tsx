import classNames from 'classnames';
import React from 'react'
import GameItemActiveContent, { IGameActiveOptions } from './components/GameItemActiveContent';
import GameItemAvailableContent from './components/GameItemAvailableContent';
import GameItemFailedContnet from './components/GameItemFailedContent';
import ItemButton from './components/ItemButton';
import './GameItem.scss';
export type ButtonType = 'activable' | 'activated' | 'failed';
export interface IGameItemComonProps {
    level: string | number;
    price: string | number;
    activeProps?: IGameActiveOptions;
}
export interface IGameItemProps extends IGameItemComonProps {
    type: ButtonType;
}
const getCardClassName = (type: ButtonType) => {
    if (type === 'activable') return '';
    if (type === 'activated') return '_active';
    if (type === 'failed') return '_red';
 }
const GameItem: React.FC<IGameItemProps> = ({type, level, price, activeProps}) => {

  return (
    <div className={classNames("item", getCardClassName(type))}>
      {type === 'activated' && activeProps && <GameItemActiveContent level={level} price={price} {...activeProps} />}
      {type === 'activable' && <GameItemAvailableContent level={level} price={price} />}
      {type === 'failed' && <GameItemFailedContnet level={level} price={price} />}
      <ItemButton state={type} price={price} level={level}/>
    </div>
  )
}

export default GameItem;