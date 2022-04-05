import styles from './styles.module.scss'
import { SignInButton } from '../SignInButton'

export default function Header (){
  return (
    <header className={styles.HeaderContainer}>
      <div className={styles.HeaderContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Post</a>
        </nav>
        <SignInButton/>
      </div>
    </header>
  )
}