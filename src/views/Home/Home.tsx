import React from 'react'
import styled from 'styled-components'
import taxiLogo from '../../assets/img/taxi-logo-vr.png'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'
import './components/home.css'
import CardContent from "../../components/CardContent";
import Card from "../../components/Card";
import car from "../../assets/img/car.png";

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={taxiLogo} height={120} />}
      />

      <Container>
        <Balances />
        <Spacer size="lg" />
          <StyledWrapper>
              <TaxiCard>
                  <CardContent>
                      <div style={{ flex: 1,textAlign:'left',paddingLeft:'10px' }}>
                          <p className="taxiBalanceHeading">Total TAXI Supply</p>
                          <h5 className="lockedText">174,901,175</h5>
                      </div>
                  </CardContent>
              </TaxiCard>
              <Spacer />
              <Card>
                  <CardContent>
                      <StyledBalances>
                          <StyledBalance>
                              <div style={{ flex: 1,textAlign:'left',paddingLeft:'10px' }}>
                                  <p className="taxiBalanceHeading">TAXI Staked</p>
                                  <h5 className="lockedTaxiStaked">LOCKED</h5>
                              </div>
                              <div style={{ flex: 1,textAlign:'center',paddingLeft:'10px',borderLeft: '0.75px solid #FFDFC3' }}>
                                  <p className="taxiBalanceHeading">TAXI Pool Remaining</p>
                                  <h5 className="lockedTaxiStaked">LOCKED</h5>
                              </div>
                          </StyledBalance>
                      </StyledBalances>
                  </CardContent>
              </Card>
          </StyledWrapper>
      </Container>
        <ConnectWallet>CONNECT WALLET</ConnectWallet>
      <Spacer size="lg" />
    </Page>
  )
}

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: stretch;
  }
`
const TaxiCard = styled.div`
background: #FFFFFF;
  box-shadow: 4px 4px 4px rgba(51, 51, 51, 0.25);
  border-radius: 20px;
`
const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
`
const StyledBalances = styled.div`
  display: flex;
`
const StyledBalance = styled.div`
  display: flex !important;
  flex: 1;
`
const ConnectWallet = styled.button`
        background: linear-gradient(180deg,#FFF19D 0%,#FCE352 100%),#FCE352;
    border-radius: 30px;
    font-family: Leo Rounded;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
    border-width: 0;
    text-align: center;
    color: #333333;
    margin-top: 40px;
    margin-left: 150px;
    margin-right: 130px;
    padding: 15px;
    text-transform: lowercase;
`
export default Home
