import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFavoritesStore = create(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      // إضافة منتج للمفضلة
      addToFavorites: (product) => {
        const { items } = get();
        const existingItem = items.find(item => item.id === product.id);
        
        if (!existingItem) {
          set({
            items: [...items, product]
          });
        }
      },

      // حذف منتج من المفضلة
      removeFromFavorites: (productId) => {
        const { items } = get();
        set({
          items: items.filter(item => item.id !== productId)
        });
      },

      // التحقق من وجود منتج في المفضلة
      isInFavorites: (productId) => {
        const { items } = get();
        return items.some(item => item.id === productId);
      },

      // مسح جميع المفضلة
      clearFavorites: () => set({ items: [] }),

      // فتح/إغلاق موديل المفضلة
      toggleFavorites: () => set((state) => ({ isOpen: !state.isOpen })),
      closeFavorites: () => set({ isOpen: false }),
      openFavorites: () => set({ isOpen: true }),

      // حساب عدد المنتجات المفضلة
      getTotalItems: () => {
        const { items } = get();
        return items.length;
      },

      // الحصول على جميع المنتجات المفضلة
      getFavoriteItems: () => {
        const { items } = get();
        return items;
      }
    }),
    {
      name: 'favorites-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useFavoritesStore; 