import { useLanguage } from '../contexts/LanguageContext'
import Header from '../components/Header'
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
import Footer from '../components/Footer'
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
      <MobileAppPromo />
      <StarsSystem />
      <FAQPreview />
      <PaymentMethods />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default HomePage 