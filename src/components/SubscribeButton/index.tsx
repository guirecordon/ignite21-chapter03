import { api } from '@/services/api';
import { getStripeJs } from '@/services/stripe-js';
import { useSession, signIn } from 'next-auth/react'

import styles from './styles.module.scss';

interface SubscribeButtonProps {
  productId: string;
}

export function SubscribeButton({ productId }: SubscribeButtonProps) {
  const { status } = useSession()
  
  async function handleSubscription() {
    if(status === 'unauthenticated') {
      alert('You\'ll be redirect to sign in before you can subscribe. Please try again once you\'re signed in')
      signIn('github')
      return;
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJs()

      await stripe?.redirectToCheckout({ sessionId })
    } catch(error) {
      if(error instanceof Error) {
        alert(error.message)
      }
      alert('An error ocurred while trying to create a subscription')
    }
  }
  
  
  return (
    <button 
      type="button" 
      className={styles.buttonContainer}
      onClick={handleSubscription}
    >
      Subscribe now
    </button>
  )
}