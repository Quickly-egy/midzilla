import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import { CurrencyProvider } from './contexts/CurrencyContext'
import Loader from './components/Loader/Loader'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import FAQPage from './pages/FAQPage'
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
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/mobile-games" element={<HomePage />} />
                <Route path="/pc-games" element={<HomePage />} />
                <Route path="/gift-cards" element={<HomePage />} />
                <Route path="/software" element={<HomePage />} />
                <Route path="/offers" element={<HomePage />} />
                <Route path="/star-system" element={<HomePage />} />
                <Route path="/orders" element={<HomePage />} />
                <Route path="/points" element={<HomePage />} />
              </Routes>
            </Layout>
          </Router>
        </CurrencyProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
