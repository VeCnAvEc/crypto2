import { IGameActiveOptions } from '../GameItem/components/GameItemActiveContent'
import { IGameItemProps } from '../GameItem/GameItem'

const items: (IGameItemProps & Partial<IGameActiveOptions>)[] = [
  { level: 1, price: 8, type: 'activable' },
  { level: 1, price: 8, type: 'failed' },
  { level: 1, price: 8, type: 'activated', activeProps: {
      progress: 20,
      fullfield: '1.223',
      bonus: '0.48',
      profit: '1.244'
  } },
  { level: 1, price: 8, type: 'failed' },
  { level: 1, price: 8, type: 'failed' },
  { level: 1, price: 8, type: 'failed' },
  { level: 1, price: 8, type: 'activated', activeProps: {
    progress: 20,
    fullfield: '1.223',
    bonus: '0.48',
    profit: '1.244'
} },
{ level: 1, price: 8, type: 'activated', activeProps: {
    progress: 20,
    fullfield: '1.223',
    bonus: '0.48',
    profit: '1.244'
} },
{ level: 1, price: 8, type: 'activable' },
{ level: 1, price: 8, type: 'activable' },
{ level: 1, price: 8, type: 'activable' },
{ level: 1, price: 8, type: 'activable' },
{ level: 1, price: 8, type: 'activable' },
{ level: 1, price: 8, type: 'activable' }

]
export default items
