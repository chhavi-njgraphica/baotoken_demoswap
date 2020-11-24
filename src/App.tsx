import React, { useCallback, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { UseWalletProvider } from 'use-wallet'
// import DisclaimerModal from './components/DisclaimerModal'
import MobileMenu from './components/MobileMenu'
import TopBar from './components/TopBar'
import FarmsProvider from './contexts/Farms'
import ModalsProvider from './contexts/Modals'
import TransactionProvider from './contexts/Transactions'
import BaoProvider from './contexts/BaoProvider'
import useModal from './hooks/useModal'
import theme from './theme'
import Farms from './views/Farms'
import Taxi from './views/Taxi'
import Home from './views/Home'
import Staking from "./views/Staking";
import Banking from "./views/Banking";

const App: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const handleDismissMobileMenu = useCallback(() => {
    setMobileMenu(false)
  }, [setMobileMenu])

  const handlePresentMobileMenu = useCallback(() => {
    setMobileMenu(true)
  }, [setMobileMenu])

  return (
    <Providers>
      <Router>
        <TopBar onPresentMobileMenu={handlePresentMobileMenu} />
        <MobileMenu onDismiss={handleDismissMobileMenu} visible={mobileMenu} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/farms">
            <Farms />
          </Route>
          <Route path="/staking">
            <Staking />
          </Route>
          <Route path="/banking">
            <Banking />
          </Route>
          <Route path="/taxi">
            <Taxi />
          </Route>
        </Switch>
      </Router>
      <Disclaimer />
    </Providers>
  )
}

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <UseWalletProvider
        chainId={97}
        connectors={{
          // walletconnect: { rpcUrl: 'https://bsc-dataseed.binance.org' },
          walletconnect: { rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/' },
        }}
      >
        <BaoProvider>
          <TransactionProvider>
            <FarmsProvider>
              <ModalsProvider>{children}</ModalsProvider>
            </FarmsProvider>
          </TransactionProvider>
        </BaoProvider>
      </UseWalletProvider>
    </ThemeProvider>
  )
}

const Disclaimer: React.FC = () => {
  const markSeen = useCallback(() => {
    localStorage.setItem('disclaimer', 'seen')
  }, [])

  /*const [onPresentDisclaimerModal] = useModal(
    <DisclaimerModal onConfirm={markSeen} />,
  )*/

  useEffect(() => {
    const seenDisclaimer = false //localStorage.getItem('disclaimer')
    if (!seenDisclaimer) {
      // onPresentDisclaimerModal()
    }
  }, [])

  return <div />
}

export default App
