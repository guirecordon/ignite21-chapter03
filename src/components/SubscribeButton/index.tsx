import styles from './styles.module.scss';

interface SubscribeButtonProps {
  productId: string;
}

export function SubscribeButton({ productId }: SubscribeButtonProps) {
  return (
    <button type="button" className={styles.buttonContainer}>
      Subscribe now
    </button>
  )
}