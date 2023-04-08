import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SigninButton() {
  const isLoggedOff = true;

  return isLoggedOff ? (
      <button type='button' className={styles.buttonContainer}>
        <FaGithub color='#EBA417' size={24} />
        Sign in with GitHub
      </button>
    ) : (
      <button type='button' className={styles.buttonContainer}>
        <FaGithub color='#04D361' size={24} />
        guirecordon
        <FiX />
      </button>
    )
}