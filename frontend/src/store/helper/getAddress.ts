export const getAddress = async(): Promise<string> => {
    return await window.ethereum.request({
        method: 'eth_requestAccounts'
    })
} 