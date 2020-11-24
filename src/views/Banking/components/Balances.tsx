import BigNumber from 'bignumber.js'
import React, { useEffect, useCallback, useState } from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import Label from '../../../components/Label'
import Input from '../../../components/Input'

import Spacer from '../../../components/Spacer'
import Value from '../../../components/Value'
import useAllEarnings from '../../../hooks/useAllEarnings'
import useAllStakedValue from '../../../hooks/useAllStakedValue'
import useFarms from '../../../hooks/useFarms'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useBao from '../../../hooks/useBao'
import useBlock from '../../../hooks/useBlock'

import { getBaoSALEAddress, getBaoSupply, getBaoSALEContract, Buysale, getisAllowed } from '../../../bao/utils'
import { getBalanceNumber } from '../../../utils/formatBalance'
import Button from '../../../components/Button'

const PendingRewards: React.FC = () => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)
  const [scale, setScale] = useState(1)
  const allEarnings = useAllEarnings()
  let sumEarning = 0
  for (let earning of allEarnings) {
    sumEarning += new BigNumber(earning)
      .div(new BigNumber(10).pow(18))
      .toNumber()
  }

  const [farms] = useFarms()
  const allStakedValue = useAllStakedValue()

  if (allStakedValue && allStakedValue.length) {
    const sumWeth = farms.reduce(
      (c, { id }, i) => c + (allStakedValue[i].totalWethValue.toNumber() || 0),
      0,
    )
  }

  useEffect(() => {
    setStart(end)
    setEnd(sumEarning)
  }, [sumEarning])

  return (
    <span
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'right bottom',
        transition: 'transform 0.5s',
        display: 'inline-block',
      }}
    >
      <CountUp
        start={start}
        end={end}
        decimals={end < 0 ? 4 : end > 1e5 ? 0 : 3}
        duration={1}
        onStart={() => {
          setScale(1.25)
          setTimeout(() => setScale(1), 600)
        }}
        separator=","
      />
    </span>
  )
}


 
const Balances: React.FC = () => {
  const [totalSupply, setTotalSupply] = useState<BigNumber>()
  const bao = useBao()
  const block = useBlock()
  const baoSaleBalance = useTokenBalance(getBaoSALEAddress(bao))
  const BaoSALEContract = getBaoSALEContract(bao)

  const { account, ethereum }: { account: any; ethereum: any } = useWallet()
  const [val, setVal] = useState('')
  const [isAllowed, setisAllowed] = useState()
  const [requestedApproval, setRequestedApproval] = useState(false)

  useEffect(() => {
    async function fetchIsWhitelist() {
      const isAllowed = await getisAllowed(getBaoSALEContract(bao),account)
      console.log(isAllowed)
      setisAllowed(isAllowed)
    }
    if (bao) {
      fetchIsWhitelist()
    }
  }, [bao, setisAllowed,block])
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    setVal(e.currentTarget.value)
 }
 const onConfirm = useCallback(async (BaoSALEContract,val,account) => {
  try {
    setRequestedApproval(true)
    console.log(val)
    console.log(BaoSALEContract)

    const txHash = await Buysale(BaoSALEContract,val,account)
    // user rejected tx or didn't go thru
    if (!txHash) {
      setRequestedApproval(false)
    }else{
      setRequestedApproval(false)
    }
  } catch (e) {
    setRequestedApproval(false)
  }
},[Buysale,setRequestedApproval])
  return (
    <StyledWrapper>
      <Card>
      <CardContent>
      
        {!!account ? (
            <div style={{ flex: 1 }}>
              {isAllowed==1 ? (
                <div>
                  <Input
                      value={val}
                      placeholder="Amount to buy"
                      onChange={handleChange}
                      />
                        <Spacer />
                        <Button
                          disabled={requestedApproval}
                          text={'Buy Token'}
                          onClick={async () => {
                            await onConfirm(BaoSALEContract,val,account)
                          }}
                        />
                  </div>
              ):(
                <Label text="You not on whitelist" />
              )}
            </div>
        ):(
          <div style={{ flex: 1 }}>
            <Label text="Begin ICO SALE" />
            <Value
            value={!!account ? getBalanceNumber(baoSaleBalance) : 'Locked'}
          />
          </div>
          
        )}
      </CardContent>
      </Card>
      <Spacer />

      <Card>
        <CardContent>
          <Label text="Total Balance Purchased" />
          <Value
            value={!!account ? getBalanceNumber(baoSaleBalance) : 'Locked'}
          />
        </CardContent>
      </Card>
    </StyledWrapper>
  )
}

const Footnote = styled.div`
  font-size: 14px;
  padding: 8px 20px;
  color: ${(props) => props.theme.color.grey[400]};
  border-top: solid 1px ${(props) => props.theme.color.grey[300]};
`
const FootnoteValue = styled.div`
  font-family: 'Roboto Mono', monospace;
  float: right;
`

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: stretch;
  }
`

const StyledBalances = styled.div`
  display: flex;
`

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`

export default Balances
