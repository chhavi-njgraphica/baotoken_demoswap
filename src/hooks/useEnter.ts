import {useCallback} from 'react'

import useBao from './useBao'
import {useWallet} from 'use-wallet'

import {enter, getXBaoStakingContract} from '../bao/utils'

const useEnter = () => {
  const {account} = useWallet()
  const bao = useBao()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await enter(
        getXBaoStakingContract(bao),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, bao],
  )

  return {onEnter: handle}
}

export default useEnter
