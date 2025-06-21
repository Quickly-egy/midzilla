import { useLanguage } from '../../contexts/LanguageContext'
import Header from '../Header'
import { CartSidebar } from '../Cart'
import FavoritesSidebar from '../Favorites/FavoritesSidebar'
import CurrencySelector from '../CurrencySelector/CurrencySelector'
import './Layout.css'

const Layout = ({ children }) => {
    const { isRTL } = useLanguage()

    return (
        <div className="layout-wrapper" dir={isRTL ? 'rtl' : 'ltr'}>
            <Header />
            <main className="main-content">
                {children}
            </main>
            <CartSidebar />
            <FavoritesSidebar />
            <CurrencySelector />
        </div>
    )
}

export default Layout 