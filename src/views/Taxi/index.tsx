import React from "react"
import styled from "styled-components";
import Page from '../../components/Page/Page';
import bnb from "../../assets/img/bnb.png";
import TokenModal from './components/TokenModal'
import useModal from '../../hooks/useModal'
import arrow from "../../assets/img/left-arrow.png";
import ada from "../../assets/img/ada.png";
import belowarrow from "../../assets/img/below-arrow.png";
import bgImage from "../../assets/img/taxi-bg.jpg";
import './components/taxi.css';
import Button from "../../components/Button";

const Taxi: React.FC = () => {
    const [onPresentTokenModal] = useModal(<TokenModal />)
    return (
        <Page>

            <TaxiCard>
                <CardHeader>
                    <div>
                    <img src={arrow} height="32" style={{  }} />
                    </div>
                    <h3 style={{ textAlign:'center',width:'100%' }}>Add Liqudity</h3>
                </CardHeader>

                <CardBody>
                    <CardContent>
                        <div style={{ float:'left',padding: '10px 10px 10px 30px' }}>
                            <h5 style={{ margin: '0',fontFamily: 'Noto Sans',fontStyle: 'normal',fontWeight: 'bold',fontSize: '16px',lineHeight: '16px',color: '#F4C82B'}} >Input</h5>
                            <h6 style={{ fontFamily: 'ToyBox',fontStyle: 'normal',fontWeight: 'normal',fontSize: '20px',lineHeight: '24px',display: 'flex',alignItems: 'center',color: '#FFA800',margin:'0',paddingTop:'15px'}}>1</h6>
                        </div>

                        <div style={{ float:'right',padding:'10px 30px 10px 10px',display:'inline-flex',marginTop:'37px'}}>
                            <h5></h5>
                            <img src={bnb} height="15" />
                            <div className="dropDownContent" onClick={onPresentTokenModal}>
                                <h5 style={{ margin: '0'}}>BNB</h5>
                                <img src={belowarrow} width="10" style={{ paddingLeft: '5px' }}/>
                            </div>
                        </div>
                    </CardContent>

                    <CardContent>
                        <div style={{ float:'left',padding: '10px 10px 10px 30px' }}>
                            <h5 style={{ margin: '0',fontFamily: 'Noto Sans',fontStyle: 'normal',fontWeight: 'bold',fontSize: '16px',lineHeight: '16px',color: '#F4C82B'}} >Input</h5>
                            <h6 style={{ fontFamily: 'ToyBox',fontStyle: 'normal',fontWeight: 'normal',fontSize: '20px',lineHeight: '24px',display: 'flex',alignItems: 'center',color: '#FFA800',margin:'0',paddingTop:'15px'}}>5.45629</h6>
                        </div>

                        <div style={{ float:'right',padding:'10px 30px 10px 10px',display:'inline-flex',marginTop:'37px'}}>
                            <h5></h5>
                            <img src={ada} height="15" />
                            <div className="dropDownContent" onClick={onPresentTokenModal}>
                                <h5 style={{ margin: '0'}}>ADA</h5>
                                <img src={belowarrow} width="10" style={{ paddingLeft: '5px' }}/>
                            </div>
                        </div>
                    </CardContent>

                    <CardContent>
                        <h5 className="pricePoolHeading">Price and pool share</h5>
                        <div className="poolContent">
                            <div style={{ padding: '10px' }}>
                                <h5 className="poolContentHeading">5.456259</h5>
                                <h6 className="poolContentDesc">ATOM per BNB</h6>
                            </div>

                            <div style={{ padding:'10px' }}>
                                <h5 className="poolContentHeading">0.183275</h5>
                                <h6 className="poolContentDesc">BNB per ATOM</h6>
                            </div>

                            <div style={{ padding:'10px' }}>
                                <h5 className="poolContentHeading">0%</h5>
                                <h6 className="poolContentDesc">Share of pool</h6>
                            </div>
                        </div>
                    </CardContent>
                    <ConnectWallet>CONNECT WALLET</ConnectWallet>
                </CardBody>
            </TaxiCard>
        </Page>

    )
}
const TaxiCard = styled.div`
    width: 460px;
    height: 533px;
    left: 490px;
    top: 183px;
    background: #FFFFFF;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin-top:60px;
`
const CardHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 40px 20px 40px;
    font-family: Leo Rounded;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;    
    text-align: center;    
    color: #333333;
`
const CardBody = styled.div``

const CardContent = styled.div`
    background: #F3F3F3;
    border-radius: 20px;
    margin-left: 92px;
    margin-right: 92px;
    width: auto;
    height: 78px;
    margin-bottom: 30px;
`
const StyledModal = styled.div`
  padding: 0 20px;
  background: ${(props) => props.theme.color.grey[200]};
  border: 1px solid ${(props) => props.theme.color.grey[300]}ff;
  border-radius: 12px;
  box-shadow: inset 1px 1px 0px ${(props) => props.theme.color.grey[100]};
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: 0;
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
const StyledPage = styled.div``
export default Taxi