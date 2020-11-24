import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import Spacer from '../../../components/Spacer'
import car from '../../../assets/img/car.png'

const Balances: React.FC = () => {
  return (
    <StyledWrapper>
      <Card>
        <CardContent>
          <StyledBalances>
            <StyledBalance>
              <img src={car} width="80" />
              <div style={{ flex: 1,textAlign:'left',paddingLeft:'10px' }}>
                <p className="taxiBalanceHeading">Your TAXI Balance</p>
                <h5 className="lockedText">LOCKED</h5>
              </div>
            </StyledBalance>
          </StyledBalances>
        </CardContent>
        <Footnote>
          Pending harvest:
          <FootnoteValue>
            0.000 <span className="footerText">TAXI</span>
          </FootnoteValue>
        </Footnote>
      </Card>
      <Spacer />

      <Card>
        <CardContent>
          <div style={{ flex: 1,textAlign:'left',paddingLeft:'10px' }}>
            <p className="taxiBalanceHeading">TAXI in Circulation</p>
            <h5 className="lockedText">LOCKED</h5>
          </div>
        </CardContent>
        <Footnote>
          New rewards per block
          <FootnoteValue>
            16.563 <span className="footerText">TAXI</span>
          </FootnoteValue>
        </Footnote>
      </Card>
    </StyledWrapper>
  )
}

const Footnote = styled.div`
  font-size: 14px;
  padding: 8px 20px;
  border-top: solid 1px ${(props) => props.theme.color.grey[300]};
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #333333;
`
const FootnoteValue = styled.div`
  float: right;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;  
  color: #F4C82B;
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
  display: flex !important;
  flex: 1;
`

export default Balances
