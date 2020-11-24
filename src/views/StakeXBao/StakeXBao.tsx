import React, {useEffect, useMemo, useState} from 'react'
import styled from 'styled-components'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import Spacer from '../../components/Spacer'
import useBao from '../../hooks/useBao'
import {getContract} from '../../utils/erc20'
import UnstakeXBao from './components/UnstakeXBao'
import StakeBao from "./components/StakeBao";

import {contractAddresses} from '../../bao/lib/constants'
import {getXBaoSupply} from "../../bao/utils";
import BigNumber from "bignumber.js";
import {getBalanceNumber} from "../../utils/formatBalance";

const StakeXBao: React.FC = () => {
  const {
    tokenAddress,
  } = {
    tokenAddress: contractAddresses.xBao[97],
  }

  const [totalSupply, setTotalSupply] = useState<BigNumber>()

  const bao = useBao()
  const {ethereum} = useWallet()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getXBaoSupply(bao)
      setTotalSupply(supply)
    }
    if (bao) {
      fetchTotalSupply()
    }
  }, [bao, setTotalSupply])



  const lpContract = useMemo(() => {
    return getContract(ethereum as provider, tokenAddress)
  }, [ethereum, tokenAddress])

  return (
    <>
      <StyledFarm>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <UnstakeXBao
              lpContract={lpContract}
            />
          </StyledCardWrapper>
          <Spacer/>
          <StyledCardWrapper>
            <StakeBao
            />
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg"/>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <StyledInfo>
              ℹ️️ You will earn a portion of the swaps fees based on the amount
              of xBao held relative the weight of the staking. xBao can be minted
              by staking Bao. To redeem Bao staked plus swap fees convert xBao
              back to Bao. {totalSupply ? `There are currently ${getBalanceNumber(totalSupply)} xBAO in the whole pool.` : '' }
            </StyledInfo>
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg"/>
      </StyledFarm>
    </>
  )
}

const StyledFarm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[400]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default StakeXBao
