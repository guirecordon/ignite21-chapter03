import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'

import styles from './styles.module.scss'

export function SigninButton() {
  const { data, status } = useSession();

  return (status === 'unauthenticated') ? (
      <button 
        type='button' 
        className={styles.buttonContainer} 
        onClick={() => signIn('github')}
      >
        <FaGithub color='#EBA417' size={24} />
        Sign in with GitHub
      </button>
    ) : (
      <button type='button' className={styles.buttonContainer}>
        <FaGithub color='#04D361' size={24} />
        {data?.user?.name}
        <FiX onClick={() => signOut()} />
      </button>
    )
}
