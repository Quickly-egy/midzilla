import { useLanguage } from '../contexts/LanguageContext'
import Header from '../components/Header'
import MainPage from '../components/MainPage'
import { HeroSlider } from '../components/HomePage'
import TrustIndicators from '../components/HomePage/TrustIndicators'
import FeaturedCategories from '../components/HomePage/FeaturedCategories'
import './HomePage.css'

const HomePage = () => {
  const { isRTL } = useLanguage()

  return (
    <div className="home-page-wrapper" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      <HeroSlider />
      <TrustIndicators />
      <FeaturedCategories />
      <MainPage />
    </div>
  )
}

export default HomePage 