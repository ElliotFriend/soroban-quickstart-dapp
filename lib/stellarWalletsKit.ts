import {
  StellarWalletsKit,
  WalletNetwork,
  allowAllModules,
  XBULL_ID,
} from '@creit.tech/stellar-wallets-kit/index'

declare global {
  var stellarWalletsKit: StellarWalletsKit | undefined
}

export const stellarWalletsKit =
  global.stellarWalletsKit ||
  new StellarWalletsKit({
    network: WalletNetwork.TESTNET,
    selectedWalletId: XBULL_ID,
    modules: allowAllModules(),
  })

if (process.env.NODE_ENV !== 'production') {
  global.stellarWalletsKit = stellarWalletsKit
}
