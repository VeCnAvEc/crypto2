import React from 'react'
import { useTypeSelector } from '../../../hook/useTypedSelector';
import { Connect } from '../BtnConnect/BtnConnect';
import { Start } from '../FastStart/FastStart';
import TopIcon from '../GameItem/components/TopIcon';
import './HomeBoard.scss';
const HomeBoard: React.FC = () => {
  const { connectWallet } = useTypeSelector(state => state)

  return (
    <div className="board">
		<div className="bone">
			<div className="board_net flex__center">
				<div className="board_info">
					<h1>CryptoMatrixGame</h1>
					<div className="board_label">Connect wallet to Register or Login</div>
					<div className="board_btn flex__align">
					 	{
							connectWallet.walletInfo?.payload.connect ? 
								<Start />
							:
								<Connect />
						}
					</div>
				</div>
				<div className="board_img">
                    <TopIcon />
				</div>
			</div>
		</div>
		<div className="board_bottom">
			<div className="bone">
				<div className="board_bottom_info">
					<div className="icon icon-time">Level 5D Drive starts in: <span>01d 19h 06m 00s</span></div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default HomeBoard;