import { useLanguage } from '../contexts/LanguageContext'
import Header from '../components/Header'
import MainPage from '../components/MainPage'
import './HomePage.css'

const HomePage = () => {
  const { isRTL } = useLanguage()

  return (
    <div className="home-page-wrapper" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      <MainPage />
    </div>
  )
}

export default HomePage 