import { useLanguage } from '../contexts/LanguageContext'
import Header from '../components/Header'
import MainPage from '../components/MainPage'
import { HeroSlider } from '../components/HomePage'
import TrustIndicators from '../components/HomePage/TrustIndicators'
import FeaturedCategories from '../components/HomePage/FeaturedCategories'
import FeaturedProducts from '../components/HomePage/FeaturedProducts'
import CustomerReviews from '../components/HomePage/CustomerReviews'
import './HomePage.css'

const HomePage = () => {
  const { isRTL } = useLanguage()

  return (
    <div className="home-page-wrapper" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      <HeroSlider />
      <TrustIndicators />
      <FeaturedCategories />
      <FeaturedProducts />
      <CustomerReviews />
      <MainPage />
    </div>
  )
}

export default HomePage 