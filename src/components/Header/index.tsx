import Link from 'next/link'
import { useRouter } from 'next/router'
import ActiveLink from '../ActiveLink'
import { SigninButton } from '../SigninButton'
import styles from './styles.module.scss'

export function Header() {
  const { asPath } = useRouter()

  console.log(asPath)

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/ig.news.png" alt="ig.news" />
        <nav>
          <ActiveLink activeClassName={styles.active} href='/' legacyBehavior>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href='/posts' prefetch legacyBehavior>
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SigninButton />
      </div>
    </header>
  )
}