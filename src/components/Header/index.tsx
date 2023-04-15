import Link from 'next/link'
import { SigninButton } from '../SigninButton'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/ig.news.png" alt="ig.news" />
        <nav>
          <Link href='/' legacyBehavior>
            <a  className={styles.active}>Home</a>
          </Link>
          <Link href='/posts' prefetch legacyBehavior>
            <a>Posts</a>
          </Link>
        </nav>

        <SigninButton />
      </div>
    </header>
  )
}