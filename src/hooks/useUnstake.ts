import { useCallback } from 'react'

import useBao from './useBao'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../bao/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const bao = useBao()
  const masterChefContract = getMasterChefContract(bao)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, bao],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
