import { useLanguage } from '../contexts/LanguageContext'
import { HeroSlider } from '../components/HomePage'
import TrustIndicators from '../components/HomePage/TrustIndicators'
import FeaturedCategories from '../components/HomePage/FeaturedCategories'
import FeaturedProducts from '../components/HomePage/FeaturedProducts'
import FAQPreview from '../components/HomePage/FAQPreview'
import CustomerReviews from '../components/HomePage/CustomerReviews'
import MobileAppPromo from '../components/HomePage/MobileAppPromo'
import StarsSystem from '../components/HomePage/StarsSystem'
import PaymentMethods from '../components/HomePage/PaymentMethods'
import Newsletter from '../components/HomePage/Newsletter'
import './HomePage.css'

const HomePage = () => {
  const { isRTL } = useLanguage()

  return (
    <div className="home-page-content" dir={isRTL ? 'rtl' : 'ltr'}>
      <HeroSlider />
      <TrustIndicators />
      <FeaturedCategories />
      <FeaturedProducts />
      <CustomerReviews />
      <MobileAppPromo />
      <StarsSystem />
      <FAQPreview />
      <PaymentMethods />
      <Newsletter />
    </div>
  )
}

export default HomePage 