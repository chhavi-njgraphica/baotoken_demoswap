import {useCallback} from 'react'

import useBao from './useBao'
import {useWallet} from 'use-wallet'

import {leave, getXBaoStakingContract} from '../bao/utils'

const useLeave = () => {
  const {account} = useWallet()
  const bao = useBao()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await leave(
        getXBaoStakingContract(bao),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, bao],
  )

  return {onLeave: handle}
}

export default useLeave
