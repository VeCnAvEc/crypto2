import { ethers } from "ethers";
import { ActionType } from "../../types/type";

export const initialState: any = {
    account: {
      informationAboutRound: [
        
      ]
    },
    active: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    payouts: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    maxPayouts  : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    activationTimes: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    rewardSum: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    referralPayoutSum: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
}

export const openLevels = (state = initialState, action: any): any => {
    switch (action.type) {
        case ActionType.AVALABLE_ROUND:
              return {
                  ...state,
                  account: {
                    informationAboutRound: [
                      action.payload.informationAboutRound
                    ]
                  }
              }
        default:
            return state
    }
}