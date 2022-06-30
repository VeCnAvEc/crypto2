import { connectToSmartContract } from "./contractAddress"
import { ethers } from "ethers"
import { getAddress } from "./getAddress";

export const Register = async (price:string, referrer: string)=> {
    const contract = connectToSmartContract()

    const address = await getAddress()

    let buyRound;

    const options = {value: ethers.utils.parseEther(price)}
    let accountInfo = await contract.users(address[0])

        try {
            if (Number(accountInfo.id) === 0) {
                if (referrer === '') {
                    await contract.register()
                } else if (referrer.length >= 30){
                    await contract.registerWithReferrer(referrer)
                } else {
                    console.log('error');
                }
            } else {
                return 'You are already registered'
            }
        } catch (e) {
            console.log('error register: ', e);
        }

        try {
            switch (price) {
                case '0':
                    break;
                case '0.05':
                  buyRound = await contract.buyround(1, options)
                    break;
                  case '0.08':
                  buyRound = await contract.buyround(2, options)          
                    break;
                  case '0.13':
                  buyRound = await contract.buyround(3, options)
                    break;
                  case '0.22':
                  buyRound = await contract.buyround(4, options)
                  
                    break;
                  case '0.33':
                  buyRound = await contract.buyround(5, options)
                  
                    break;
                  case '0.5':
                  buyRound = await contract.buyround(6, options)
                  
                    break;
                  case '0.7':
                  buyRound = await contract.buyround(7, options)
                  
                    break;
                  case '1.05':
                  buyRound = await contract.buyround(8, options)
                  
                    break;
                  case '1.45':
                  buyRound = await contract.buyround(9, options)
                  
                    break;
                  case '1.95':
                  buyRound = await contract.buyround(10, options)
                  
                    break;
                  case '2.4':
                  buyRound = await contract.buyround(11, options)
                  
                    break;
                  case '3.5':
                  buyRound = await contract.buyround(12, options) 
                  
                    break;
                  case '5.2':
                  buyRound = await contract.buyround(13, options)
                  
                    break;
                  case '7.3':
                  buyRound = await contract.buyround(14, options)
                  
                    break;
                  case '10':
                  buyRound = await contract.buyround(15, options)
                 
                    break;
                  default:
                  console.log('return isRegistred');
            }
        } catch(e) {
            console.log('error buy round: ', e);
        }
}