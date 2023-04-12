import { useSession, signIn } from 'next-auth/react'

import styles from './styles.module.scss';

interface SubscribeButtonProps {
  productId: string;
}

export function SubscribeButton({ productId }: SubscribeButtonProps) {
  const { status } = useSession()
  
  function handleSubscription() {
    if(status === 'unauthenticated') {
      signIn('github')
      return;
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