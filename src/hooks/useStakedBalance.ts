import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../bao/utils'
import useBao from './useBao'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const bao = useBao()
  const masterChefContract = getMasterChefContract(bao)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, bao])

  useEffect(() => {
    if (account && bao) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, bao])

  return balance
}

export default useStakedBalance
