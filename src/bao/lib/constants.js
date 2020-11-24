import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}



export const contractAddresses = {
  bao: {
    97: '0xF52B61D4D0BA9990e1a44c6Ce26Ea41b16F3eF77',
  },
  masterChef: {
    97: '0x7EDEAb4AcadF2057C3302eF1Ea2bf61e54C43b04',
  },
  weth: {
    97: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  xBao: {
    97: '0x2B1c3cD195B5b6c9F6fCB0780Dc646e12d3F9541'
  },
  BAOSALE: {
    97: '0xCA54e2e71236D6B2F97C9692B405333440255b59'
  },
  BAOSALECROWSALE: {
    97: '0x6eAed31E7E5A415B2Ca9D1478C5773B95D15963B'
  }
}



export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      97: '0xF52B61D4D0BA9990e1a44c6Ce26Ea41b16F3eF77',
    },
    tokenAddresses: {
      97: '0xF52B61D4D0BA9990e1a44c6Ce26Ea41b16F3eF77',
    },
    name: 'Bao Party!',
    symbol: 'BAO-ETH SLP',
    tokenSymbol: 'BAO',
    icon: '🍣',
  },
  
]
