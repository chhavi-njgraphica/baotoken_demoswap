import React from 'react'
import styled from 'styled-components'

const Card: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>

const StyledCard = styled.div`
  background: #FFFFFF;
  box-shadow: 4px 4px 4px rgba(51, 51, 51, 0.25);
  border-radius: 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default Card
