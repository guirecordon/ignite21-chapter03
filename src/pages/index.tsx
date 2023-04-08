import Head from 'next/head'

import styles from './styles.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Ig news</title>
      </Head>
      <main className={styles.mainContainer}>
        <div className={styles.leftSideHero}>
          <span>👏 Hey, welcome</span>

          <h1>News about
            the <span>React</span> world
          </h1>

          <p>Get acess to all the publications
            <strong>for {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(9.90)} month</strong>
          </p>
        </div>

        <img src="/images/heroimg.svg" alt="girl on computer" />
      </main>
    </>
  )
}
