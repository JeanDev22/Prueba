import Head from 'next/head'
import styles from './MainLayout.module.css'
import {Navbar} from '../Navbar'
import { FC, PropsWithChildren } from 'react'
import { ScriptProps } from 'next/script'

export const MainLayout:  React.FC<PropsWithChildren<ScriptProps>> = ({ children }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>HomePage</title>
            <meta name="description" content="HomePage" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />
    
          <main className={styles.main}>
            {children}
          </main>
        </div>
      )
}
