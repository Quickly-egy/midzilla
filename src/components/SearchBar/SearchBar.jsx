import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import './SearchBar.css'

const SearchBar = () => {
  const { t, isRTL } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const searchRef = useRef(null)
  const suggestionsRef = useRef(null)

  // قائمة المنتجات والألعاب للاقتراحات
  const gamesSuggestions = [
    { id: 1, name: 'PUBG Mobile', category: 'mobile', nameEn: 'PUBG Mobile', nameAr: 'ببجي موبايل' },
    { id: 2, name: 'Free Fire', category: 'mobile', nameEn: 'Free Fire', nameAr: 'فري فاير' },
    { id: 3, name: 'Call of Duty Mobile', category: 'mobile', nameEn: 'Call of Duty Mobile', nameAr: 'كول أوف ديوتي موبايل' },
    { id: 4, name: 'FIFA Mobile', category: 'mobile', nameEn: 'FIFA Mobile', nameAr: 'فيفا موبايل' },
    { id: 5, name: 'Minecraft', category: 'pc', nameEn: 'Minecraft', nameAr: 'ماين كرافت' },
    { id: 6, name: 'Fortnite', category: 'pc', nameEn: 'Fortnite', nameAr: 'فورتنايت' },
    { id: 7, name: 'Valorant', category: 'pc', nameEn: 'Valorant', nameAr: 'فالورانت' },
    { id: 8, name: 'League of Legends', category: 'pc', nameEn: 'League of Legends', nameAr: 'ليج أوف ليجندز' },
    { id: 9, name: 'Steam Gift Card', category: 'gift', nameEn: 'Steam Gift Card', nameAr: 'بطاقة ستيم' },
    { id: 10, name: 'Google Play Card', category: 'gift', nameEn: 'Google Play Card', nameAr: 'بطاقة جوجل بلاي' },
    { id: 11, name: 'iTunes Card', category: 'gift', nameEn: 'iTunes Card', nameAr: 'بطاقة آيتونز' },
    { id: 12, name: 'PlayStation Plus', category: 'gift', nameEn: 'PlayStation Plus', nameAr: 'بلايستيشن بلس' },
  ]

  // البحث والاقتراحات
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = gamesSuggestions.filter(item => {
        const searchLower = searchQuery.toLowerCase()
        const nameToSearch = isRTL ? item.nameAr : item.nameEn
        return nameToSearch.toLowerCase().includes(searchLower) ||
               item.nameEn.toLowerCase().includes(searchLower) ||
               item.nameAr.toLowerCase().includes(searchLower)
      })
      setSuggestions(filtered.slice(0, 6)) // أظهر أول 6 نتائج
      setShowSuggestions(true)
      setSelectedIndex(-1)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [searchQuery, isRTL])

  // التعامل مع الكيبورد
  const handleKeyDown = (e) => {
    if (!showSuggestions) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1)
        break
      case 'Enter':
        e.preventDefault()
        if (selectedIndex >= 0) {
          handleSuggestionClick(suggestions[selectedIndex])
        } else {
          handleSearch()
        }
        break
      case 'Escape':
        setShowSuggestions(false)
        setSelectedIndex(-1)
        break
    }
  }

  // التعامل مع النقر على اقتراح
  const handleSuggestionClick = (suggestion) => {
    const name = isRTL ? suggestion.nameAr : suggestion.nameEn
    setSearchQuery(name)
    setShowSuggestions(false)
    setSelectedIndex(-1)
    // هنا يمكن إضافة منطق التنقل للمنتج
    console.log('Selected:', suggestion)
  }

  // تنفيذ البحث
  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery)
      // هنا يمكن إضافة منطق البحث الفعلي
      setShowSuggestions(false)
    }
  }

  // إخفاء الاقتراحات عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false)
        setSelectedIndex(-1)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // أيقونة الفئة
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'mobile': return '📱'
      case 'pc': return '💻'
      case 'gift': return '🎁'
      default: return '🎮'
    }
  }

  return (
    <div className="search-bar-container" ref={searchRef} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="search-input-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder={t('searchPlaceholder')}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => searchQuery && setShowSuggestions(true)}
        />
        <button 
          className="search-button"
          onClick={handleSearch}
          aria-label={t('searchButton')}
        >
          <span className="search-icon">🔍</span>
        </button>
      </div>

      {/* الاقتراحات */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="suggestions-dropdown" ref={suggestionsRef}>
          {suggestions.map((suggestion, index) => (
            <div
              key={suggestion.id}
              className={`suggestion-item ${index === selectedIndex ? 'selected' : ''}`}
              onClick={() => handleSuggestionClick(suggestion)}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <span className="suggestion-icon">
                {getCategoryIcon(suggestion.category)}
              </span>
              <div className="suggestion-content">
                <span className="suggestion-name">
                  {isRTL ? suggestion.nameAr : suggestion.nameEn}
                </span>
                <span className="suggestion-category">
                  {suggestion.category === 'mobile' ? (isRTL ? 'ألعاب موبايل' : 'Mobile Games') :
                   suggestion.category === 'pc' ? (isRTL ? 'ألعاب كمبيوتر' : 'PC Games') :
                   (isRTL ? 'بطاقات' : 'Gift Cards')}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBar 