import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FactoryMain from '../components/factoryMain'
import ModeOfTransport from '../components/modeOfTransport'

export default function Home() {

	

  return (
    <div className={styles.container}>
      <Head>
        <title>Supply Chain Simulator</title>
        <meta name="description" content="KN Game, powered by NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
	  	<table>
			  <tr>
				  <td>
					<FactoryMain >
						{/**/}
					</FactoryMain>
				</td><td>
					<ModeOfTransport>
						{/**/}
					</ModeOfTransport>
				</td>
			</tr>
		</table>
      </main>

    </div>
  )
}
