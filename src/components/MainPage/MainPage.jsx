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
    </div>
  )
}

export default MainPage 