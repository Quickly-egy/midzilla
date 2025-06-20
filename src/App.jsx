import { useState, useEffect } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import { CurrencyProvider } from './contexts/CurrencyContext'
import Loader from './components/Loader/Loader'
import HomePage from './pages/HomePage'
import { CartSidebar } from './components/Cart'
import FavoritesSidebar from './components/Favorites/FavoritesSidebar'
import CurrencySelector from './components/CurrencySelector/CurrencySelector'
import './styles/themes.css'
import './styles/language.css'

function App() {
  const [showAnimation, setShowAnimation] = useState(true)

  useEffect(() => {
    // منع التمرير أثناء عرض الـ loader
    if (showAnimation) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    // إخفاء الأنيميشن بعد ثانيتين
    const timer = setTimeout(() => {
      setShowAnimation(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
      // إعادة تفعيل التمرير عند إلغاء المكون
      document.body.style.overflow = 'auto'
    }
  }, [showAnimation])

  // عرض الـ loader في البداية
  if (showAnimation) {
    return <Loader size={300} backgroundColor="white" />
  }

  // عرض التطبيق الرئيسي مع نظام الثيم واللغة
  return (
    <LanguageProvider>
      <ThemeProvider>
        <CurrencyProvider>
          <HomePage />
          <CartSidebar />
          <FavoritesSidebar />
          <CurrencySelector />
        </CurrencyProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
