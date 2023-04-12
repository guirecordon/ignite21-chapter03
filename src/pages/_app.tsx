import { Header } from '@/components/Header'
import type { AppProps } from 'next/app'
import { SessionProvider as NextAuthProvider } from "next-auth/react"

import '../styles/global.scss'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <NextAuthProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}
