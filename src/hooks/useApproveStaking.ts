import {useCallback} from 'react'

import useBao from './useBao'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import {
  approve,
  getBaoContract,
  getXBaoStakingContract
} from '../bao/utils'

const useApproveStaking = () => {
  const {account}: { account: string; ethereum: provider } = useWallet()
  const bao = useBao()
  const lpContract = getBaoContract(bao)
  const contract = getXBaoStakingContract(bao)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, contract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, contract])

  return {onApprove: handleApprove}
}

export default useApproveStaking
