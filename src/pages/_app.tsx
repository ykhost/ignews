import { AppProps } from 'next/App'
import Header from '../components/Header';
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </> 
  )
}

export default MyApp
