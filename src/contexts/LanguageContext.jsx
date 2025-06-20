import { createContext, useContext, useState, useEffect } from 'react'

// Translation data
const translations = {
  ar: {
    // Header
    home: 'الرئيسية',
    mobileGames: 'ألعاب موبايل',
    pcGames: 'ألعاب كمبيوتر',
    giftCards: 'بطاقات',
    software: 'برامج',
    offers: 'صفحة العروض',
    faq: 'صفحة الاسئلة الشائعة (FAQ)',
    starSystem: 'صفحة نظام النجوم',
    more: 'المزيد',
    games: 'الألعاب',
    search: 'البحث',
    searchPlaceholder: 'ابحث عن الألعاب',
    searchButton: 'بحث',
    login: 'تسجيل الدخول',
    signup: 'إنشاء حساب',
    tagline: 'مركزك الأول للألعاب والشحن',
    
    // Main Page
    heroTitle: 'مرحباً بك في عالم الألعاب',
    heroSubtitle: 'اكتشف أفضل الألعاب واحصل على أسرع خدمات الشحن',
    exploreGames: 'استكشف الألعاب',
    fastCharging: 'شحن سريع',
    
    // Features
    whyChoose: 'لماذا تختار Midzilla؟',
    instantCharging: 'شحن فوري',
    instantChargingDesc: 'احصل على شحنتك في أقل من دقيقة واحدة',
    trustedSecurity: 'أمان موثوق',
    trustedSecurityDesc: 'نضمن حماية بياناتك ومعاملاتك بأعلى مستوى',
    competitivePrices: 'أسعار تنافسية',
    competitivePricesDesc: 'أفضل الأسعار في السوق مع عروض حصرية',
    uniqueExperience: 'تجربة فريدة',
    uniqueExperienceDesc: 'واجهة حديثة وسهلة الاستخدام',
    
    // Games
    popularGames: 'الألعاب الأكثر شعبية',
    chargeNow: 'شحن الآن',
    pubgDesc: 'شحن UC بأفضل الأسعار',
    freeFireDesc: 'جواهر مجانية وعروض خاصة',
    codDesc: 'CP points بأسعار لا تقاوم',
    fifaDesc: 'FIFA Points وعملات اللعبة',
    
    // Common
    loading: 'جاري التحميل...',
    error: 'حدث خطأ',
    success: 'تم بنجاح',
    selectCurrency: 'اختيار العملة'
  },
  en: {
    // Header
    home: 'Home',
    mobileGames: 'Mobile Games',
    pcGames: 'PC Games',
    giftCards: 'Gift Cards',
    software: 'Software',
    offers: 'Offers Page',
    faq: 'FAQ Page',
    starSystem: 'Star System Page',
    more: 'More',
    games: 'Games',
    search: 'Search',
    searchPlaceholder: 'Search for games',
    searchButton: 'Search',
    login: 'Login',
    signup: 'Sign Up',
    tagline: 'Your Ultimate Gaming Hub',
    
    // Main Page
    heroTitle: 'Welcome to the Gaming World',
    heroSubtitle: 'Discover the best games and get the fastest charging services',
    exploreGames: 'Explore Games',
    fastCharging: 'Fast Charging',
    
    // Features
    whyChoose: 'Why Choose Midzilla?',
    instantCharging: 'Instant Charging',
    instantChargingDesc: 'Get your charge in less than one minute',
    trustedSecurity: 'Trusted Security',
    trustedSecurityDesc: 'We guarantee the protection of your data and transactions at the highest level',
    competitivePrices: 'Competitive Prices',
    competitivePricesDesc: 'Best prices in the market with exclusive offers',
    uniqueExperience: 'Unique Experience',
    uniqueExperienceDesc: 'Modern and easy-to-use interface',
    
    // Games
    popularGames: 'Most Popular Games',
    chargeNow: 'Charge Now',
    pubgDesc: 'Charge UC at the best prices',
    freeFireDesc: 'Free diamonds and special offers',
    codDesc: 'CP points at unbeatable prices',
    fifaDesc: 'FIFA Points and game currency',
    
    // Common
    loading: 'Loading...',
    error: 'An error occurred',
    success: 'Success',
    selectCurrency: 'Select Currency'
  }
}

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      const savedLanguage = localStorage.getItem('midzilla-language')
      if (savedLanguage && ['ar', 'en'].includes(savedLanguage)) {
        return savedLanguage
      }
      // استخدام اللغة العربية كافتراضي
      return 'ar'
    } catch (error) {
      console.warn('Error reading language from localStorage:', error)
      return 'ar'
    }
  })

  useEffect(() => {
    // تطبيق اللغة على العناصر
    const direction = language === 'ar' ? 'rtl' : 'ltr'
    const htmlElement = document.documentElement
    const bodyElement = document.body
    
    // تحديث الاتجاه
    htmlElement.setAttribute('dir', direction)
    htmlElement.setAttribute('lang', language)
    bodyElement.setAttribute('dir', direction)
    
    // تحديث classes CSS
    htmlElement.classList.remove('rtl', 'ltr')
    bodyElement.classList.remove('rtl', 'ltr')
    htmlElement.classList.add(direction)
    bodyElement.classList.add(direction)
    
    // حفظ اللغة
    try {
      localStorage.setItem('midzilla-language', language)
    } catch (error) {
      console.warn('Error saving language to localStorage:', error)
    }
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar')
  }

  const t = (key) => {
    return translations[language]?.[key] || key
  }

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
    isRTL: language === 'ar',
    isArabic: language === 'ar',
    isEnglish: language === 'en'
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
} 