import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // التحقق من الحالة المحفوظة مسبقاً أو استخدام النظام الافتراضي
    try {
      const savedTheme = localStorage.getItem('midzilla-theme')
      if (savedTheme !== null) {
        return savedTheme === 'dark'
      }
      // إذا لم توجد حالة محفوظة، استخدم تفضيل النظام
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    } catch (error) {
      console.warn('Error reading theme from localStorage:', error)
      return false
    }
  })

  // تطبيق الثيم عند تحميل المكون
  useEffect(() => {
    const applyTheme = (dark) => {
      const className = dark ? 'dark-theme' : 'light-theme'
      const htmlElement = document.documentElement
      const bodyElement = document.body
      
      // إزالة الكلاسات السابقة
      htmlElement.classList.remove('dark-theme', 'light-theme')
      bodyElement.classList.remove('dark-theme', 'light-theme')
      
      // إضافة الكلاس الجديد
      htmlElement.classList.add(className)
      bodyElement.classList.add(className)
      bodyElement.className = className
      
      // حفظ الإعداد
      try {
        localStorage.setItem('midzilla-theme', dark ? 'dark' : 'light')
      } catch (error) {
        console.warn('Error saving theme to localStorage:', error)
      }
    }

    applyTheme(isDarkMode)
  }, [isDarkMode])

  // الاستماع لتغييرات تفضيل النظام
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = (e) => {
      // تحديث الثيم فقط إذا لم يكن المستخدم قد اختار ثيماً مخصصاً
      const savedTheme = localStorage.getItem('midzilla-theme')
      if (!savedTheme) {
        setIsDarkMode(e.matches)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode)
  }

  const value = {
    isDarkMode,
    toggleTheme,
    setTheme: (mode) => setIsDarkMode(mode) // إضافة دالة لتعيين الثيم مباشرة
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
} 