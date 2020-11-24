import React, { useEffect } from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button'
import Modal, { ModalProps } from '../../../components/Modal'
import ModalActions from '../../../components/ModalActions'
import ModalContent from '../../../components/ModalContent'
import ModalTitle from '../../../components/ModalTitle'
import Spacer from '../../../components/Spacer'
import './taxi.css';
import bnb from "../../../assets/img/bnb.png";
import ada from "../../../assets/img/ada.png";
import alphaimg from "../../../assets/img/alpha.png";
import ankr from "../../../assets/img/ankr.png";
import atom from "../../../assets/img/atom.png";
import bake from "../../../assets/img/bake.png";
import band from "../../../assets/img/band.png";
const TokenModal: React.FC<ModalProps> = ({ onDismiss }) => {


    return (
        <Modal>
            <ModalTitle text="Select a Token" />
            <ModalContent>
                <StyledWalletsWrapper>
                    <StyledWalletCard>
                        <input type="text" name="search" className="textField" placeholder="Search name or paste address" />
                    </StyledWalletCard>
                    <Spacer size="sm" />
                    <StyledWalletCard>
                        <h5 className="tokenHeading">Token Name</h5>
                        <ul className="tokenList">
                            <li>
                                <img src={bnb} width="20" />
                                <span>BNB</span>
                            </li>
                            <li>
                                <img src={ada} width="20" />
                                <span>ADA</span>
                            </li>
                            <li>
                                <img src={alphaimg} width="20" />
                                <span>ALPHA</span>
                            </li>
                            <li>
                                <img src={ankr} width="20" />
                                <span>ANKR</span>
                            </li>
                            <li>
                                <img src={atom} width="20" />
                                <span>ATOM</span>
                            </li>
                            <li>
                                <img src={bake} width="20" />
                                <span>BAKE</span>
                            </li>
                            <li>
                                <img src={band} width="20" />
                                <span>BAND</span>
                            </li>
                        </ul>
                    </StyledWalletCard>
                </StyledWalletsWrapper>
            </ModalContent>

            <ModalActions>
                <Button text="Cancel" variant="secondary" onClick={onDismiss} />
            </ModalActions>
        </Modal>
    )
}


const StyledWalletsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    flex-direction: column;
    flex-wrap: none;
  }
`

const StyledWalletCard = styled.div`
  flex-basis: calc(50% - ${(props) => props.theme.spacing[2]}px);
`

export default TokenModal
