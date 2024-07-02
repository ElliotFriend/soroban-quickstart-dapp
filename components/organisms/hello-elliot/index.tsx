import React, { useState, useEffect } from "react";
import { Card } from "../../atoms";
import styles from "./style.module.css";
import { helloWorld } from "../../../shared/contracts";
// import * as HelloWorld from "hello-world-contract";
import { stellarWalletsKit } from "../../../lib/stellarWalletsKit";
import { useAccount } from "../../../hooks";
import { WalletNetwork } from "@creit.tech/stellar-wallets-kit/index";

const HelloElliot = () => {
  const account = useAccount()
  const [to, setTo] = useState("")

  const handleHello = async () => {
    const tx = await helloWorld.hello({ to })
    console.log(tx)
    // if (account && tx.built) {
      // const result = stellarWalletsKit.signTx({
      //   xdr: tx.built?.toXDR(),
      //   publicKeys: [account.address],
      //   network: WalletNetwork.TESTNET
      // })
    // }
    const result = tx.signAndSend({signTransaction: stellarWalletsKit.signTx})
    console.log('result', result)
  }

  return (
    <div>
      <Card>
        <h2>Call Contract Functions</h2>
        <div className={styles.formGroup}>
          <label className={styles.label}>Recipient:</label>
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className={styles.input}
          />
          <button onClick={handleHello} className={styles.button}>
            Write Message
          </button>
        </div>
      </Card>
    </div>
  )
}

export { HelloElliot }
