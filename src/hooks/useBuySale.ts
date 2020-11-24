import { useCallback } from 'react'

import useBao from './useBao'
import { useWallet } from 'use-wallet'

import { Buysale, getBaoSALEAddress } from '../bao/utils'

const useBuySale = () => {
  const { account } = useWallet()
  const bao = useBao()

  const handleBuysale = useCallback(
    async (amount: string) => {
      const txHash = await Buysale(
        getBaoSALEAddress(bao),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, bao],
  )

  return { onBuysale: handleBuysale }
}

export default useBuySale
