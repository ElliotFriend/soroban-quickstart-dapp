import React from 'react'
import { setAllowed } from '@stellar/freighter-api'
import { ISupportedWallet } from '@creit.tech/stellar-wallets-kit/index'
import { stellarWalletsKit } from '../../../lib/stellarWalletsKit'
import styles from './style.module.css'

export interface ConnectButtonProps {
  label: string
  isHigher?: boolean
}

const connectWallet = async () => {
  await stellarWalletsKit.openModal({
    onWalletSelected: async (option: ISupportedWallet) => {
      stellarWalletsKit.setWallet(option.id);
      // const publicKey = await stellarWalletsKit.getPublicKey()
    },
    onClosed: (err: Error) => {
      console.error("An error occurred", err)
    }
  })
}

export function ConnectButton({ label, isHigher }: ConnectButtonProps) {
  return (
    <button
      className={styles.button}
      style={{ height: isHigher ? 50 : 38 }}
      onClick={connectWallet}
    >
      {label}
    </button>
  )
}
