import { useEffect } from 'react';
import { useActions } from '../../../hook/useAction';
import { useTypeSelector } from '../../../hook/useTypedSelector';
import { getRound } from '../../../store/helper/getAccount';
import { IInfoAboutRound } from '../../../types/type';
import GameItem from '../GameItem/GameItem';
import './GameItemsSection.scss';
import items from './items';
const GameItemsSection: React.FC = () => {
  const { availableRound } = useActions()
  const { rounds } = useTypeSelector(state => state)

  const priceLevel = [
    '0', '0.05', '0.08', '0.13', '0.22', '0.33', '0.5',
    '0.7', '1.05', '1.45', '1.95', '2.4', '3.5', '5.2',
    '7.3', '10'
  ]

  const processingLevels = async() => {
    const level:any = await getRound()
    let card: any = []

    for ( let arr in level ) {
      for(let i = 0; i < level[arr].length; i++) {
        if ( arr === 'active' ) {
          card.push({
            type: level[arr][i] ? "activated": "activable"
          })
        }

        if ( arr === 'payouts' ) {
          card[i].level = i;
          card[i].price = priceLevel[i];
        }

        if( card[i].type === 'activated' ) {
            card[i].activeProps = {
              progress: Number(level['maxPayouts'][i]),
              fullfield: String(+level[arr][i] + +level['rewardSum'][i]),
              bonus: Number(level['rewardSum'][i]),
              profit: Number(level[arr][i])
          }
        }
      }      
    }

    return card
  }

  useEffect(() => {
    const featchDate = async() => {
      availableRound(await processingLevels())
    }

    featchDate()
  }, [])

  useEffect(() => {
    console.log('render');
  }, [rounds])

  return (
    <div className="items grid">
      {rounds.account.informationAboutRound[0]?.map((item: any, i: any) => (
        <GameItem {...item} key={'item_' + i} />
      ))}
    </div>
  )
}


export default GameItemsSection