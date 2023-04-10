import { GetStaticProps } from 'next'
import { SubscribeButton } from '@/components/SubscribeButton';
import Head from 'next/head'

import styles from './home.module.scss';
import { stripe } from '@/services/stripe';


interface ProductProps {
  product: {
    priceId: string,
    amount: number,
  }
}

export default function Home({ product }: ProductProps) {

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
            }).format(product.amount)} month</strong>
          </p>

          <SubscribeButton productId={product.priceId} />
        </div>

        <img src="/images/heroimg.svg" alt="girl on computer" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>   {
  const price = await stripe.prices.retrieve('price_1MukIbC7BndbOsBMQP1PJiJV')

  const product = {
    productId: price.id,
    amount: (price.unit_amount! / 100)
  }

  return {
    props: {
      product,
    },
    revalidate: (60 * 60 * 24) // every 24 hours
  }
}