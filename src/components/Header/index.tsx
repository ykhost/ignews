import styles from './styles.module.scss'
import { SignInButton } from '../SignInButton'
import { ActiveLink } from '../ActiveLink'

export default function Header (){

  return (
    <header className={styles.HeaderContainer}>
      <div className={styles.HeaderContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Post</a>
          </ActiveLink>
        </nav>
        <SignInButton/>
      </div>
    </header>
  )
}