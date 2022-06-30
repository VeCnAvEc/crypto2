import { ethers } from 'ethers';
import React, { useState } from 'react'
import { connectToSmartContract } from '../../../../store/helper/contractAddress';
import CopyElement from '../../../atoms/CopyElement';
import './Statistic.scss';
import StatItem from './StatItem';
const Statistic: React.FC = () => {
  const [info, setInfo] = useState({
    membersTotal: 0,
    transactionsMade: 0,
    turnoverBNB: 0,
  })

  const getGlobalStatic = async() => {
    const getStatic = await connectToSmartContract().getGlobalStatistic()

    // setInfo({
    //   membersTotal: getStatic[0],
    //   transactionsMade: getStatic[1],
    //   turnoverBNB: getStatic[2]
    // })

    const qwer =await connectToSmartContract().gettimeRoundEnd()
    qwer.forEach((time: any) => {
      console.log(Number(time));
    })
  
  }
  getGlobalStatic()


  

  return (
    <div className="home_info_stat">
            <div className="home_info_stat_line">BNB Matrix Game Contracts</div>
            <div className="home_info_stat_line flex__center">
              Express
              <CopyElement content='0x786...6c4' copyText='0x7866aEB75E804DB317e99C53aF14a162ba43A6c4' link='/' />
            </div>
            <div className="home_info_stat_line flex__center">
              MaxDrive
              <CopyElement content='0x786...6c4' copyText='0x7866aEB75E804DB317e99C53aF14a162ba43A6c4' link='/' />
            </div>
            <div className="home_info_stat_items">
                <StatItem title='Members total' count={Number(info.membersTotal)} increasedBy='' />
                <StatItem title='Transactions made' count={Number(info.transactionsMade)} increasedBy='' />
                <StatItem title='Turnover,BNB' count={ethers.utils.formatEther(info.turnoverBNB)} increasedBy='' />
            </div>
          </div>
  )
}

export default Statistic;