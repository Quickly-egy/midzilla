import { useLanguage } from '../../contexts/LanguageContext'
import { useCurrency } from '../../contexts/CurrencyContext'
import useCartStore from '../../stores/cartStore'
import useFavoritesStore from '../../stores/favoritesStore'
import './MainPage.css'

const MainPage = () => {
  const { t, isRTL } = useLanguage()
  const { formatPrice } = useCurrency()
  const { addItem } = useCartStore()
  const { addToFavorites, removeFromFavorites, isInFavorites } = useFavoritesStore()

  // بيانات الألعاب التجريبية
  const games = [
    {
      id: 1,
      name: 'PUBG Mobile',
      nameAr: 'ببجي موبايل',
      price: 9.99,
      image: '🎮',
      description: t('pubgDesc')
    },
    {
      id: 2,
      name: 'Free Fire',
      nameAr: 'فري فاير',
      price: 4.99,
      image: '⚔️',
      description: t('freeFireDesc')
    },
    {
      id: 3,
      name: 'Call of Duty',
      nameAr: 'كول أوف ديوتي',
      price: 14.99,
      image: '🏆',
      description: t('codDesc')
    },
    {
      id: 4,
      name: 'FIFA Mobile',
      nameAr: 'فيفا موبايل',
      price: 7.99,
      image: '⚽',
      description: t('fifaDesc')
    }
  ]

  const handleAddToCart = (game) => {
    const cartItem = {
      id: game.id,
      name: { ar: game.nameAr, en: game.name },
      price: game.price,
      image: game.image,
      description: game.description
    }
    addItem(cartItem)
  }

  const handleToggleFavorite = (game) => {
    const favoriteItem = {
      id: game.id,
      name: { ar: game.nameAr, en: game.name },
      price: game.price,
      image: game.image,
      description: game.description
    }
    
    if (isInFavorites(game.id)) {
      removeFromFavorites(game.id)
    } else {
      addToFavorites(favoriteItem)
    }
  }

  return (
    <div className="main-page" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content fade-in">
            <h1 className="hero-title neon-text">
              {t('heroTitle')}
            </h1>
            <p className="hero-subtitle">
              {t('heroSubtitle')}
            </p>
            <div className="hero-actions">
              <button className="cta-button primary">
                <span>🎮</span>
                {t('exploreGames')}
              </button>
              <button className="cta-button secondary">
                <span>⚡</span>
                {t('fastCharging')}
              </button>
            </div>
          </div>
          <div className="hero-visual slide-in-right">
            <div className="gaming-card">
              <div className="card-glow"></div>
              <div className="gaming-icons">
                <span className="game-icon">🎮</span>
                <span className="game-icon">🕹️</span>
                <span className="game-icon">🎯</span>
                <span className="game-icon">🏆</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">{t('whyChoose')}</h2>
          <div className="features-grid">
            <div className="feature-card fade-in">
              <div className="feature-icon">🚀</div>
              <h3>{t('instantCharging')}</h3>
              <p>{t('instantChargingDesc')}</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">🛡️</div>
              <h3>{t('trustedSecurity')}</h3>
              <p>{t('trustedSecurityDesc')}</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">💎</div>
              <h3>{t('competitivePrices')}</h3>
              <p>{t('competitivePricesDesc')}</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">🎨</div>
              <h3>{t('uniqueExperience')}</h3>
              <p>{t('uniqueExperienceDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Games Section */}
      <section className="games-section">
        <div className="container">
          <h2 className="section-title">{t('popularGames')}</h2>
          <div className="games-grid">
            {games.map((game) => (
              <div key={game.id} className="game-card">
                <div className="game-image">{game.image}</div>
                <h3>{isRTL ? game.nameAr : game.name}</h3>
                <p>{game.description}</p>
                <div className="game-price">
                  {formatPrice(game.price)}
                </div>
                <div className="game-actions">
                  <button 
                    className={`favorite-btn ${isInFavorites(game.id) ? 'active' : ''}`}
                    onClick={() => handleToggleFavorite(game)}
                    title={isRTL ? 'إضافة للمفضلة' : 'Add to Favorites'}
                  >
                    {isInFavorites(game.id) ? '⭐' : '☆'}
                  </button>
                  <button 
                    className="game-button"
                    onClick={() => handleAddToCart(game)}
                  >
                    {isRTL ? 'إضافة للسلة' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default MainPage 