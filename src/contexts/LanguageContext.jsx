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
    
    // Stars System
    starsSystemTitle: 'نظام النجوم للعملاء',
    starsSystemSubtitle: 'يظهر ضمن أقسام الصفحة الرئيسية، لكن بشكل مختصر ومبسط',
    starsSystemDescription: 'اكسب نجوماً مع كل عملية شراء!',
    starsSystemCTA: 'تعرف أكثر عن نظام النجوم',
    starsAndAdvantages: 'مستويات النجوم والمزايا:',
    starLevel1: 'عميل جديد',
    starLevel1Desc: 'أول عملية شراء',
    starLevel1Benefit: 'لا يوجد خصم - ترحيب فقط',
    starLevel2: 'عميل فعال',
    starLevel2Desc: 'ثاني عملية شراء',
    starLevel2Benefit: 'كوبون خصم دائم 1%',
    starLevel3: 'عميل نشط',
    starLevel3Desc: 'ثالث أو رابع عملية',
    starLevel3Benefit: 'كوبون خصم دائم 1.5%',
    starLevel4: 'عميل مميز',
    starLevel4Desc: 'خامس أو سادس عملية',
    starLevel4Benefit: 'كوبون خصم دائم 1.75%',
    starLevel5: 'عميل ذهبي',
    starLevel5Desc: 'سابع أو ثامن عملية',
    starLevel5Benefit: 'كوبون خصم دائم 2%',
    levelBadge: 'عدد النجوم',
    titleBadge: 'اللقب',
    operationsBadge: 'عدد العمليات',
    benefitsBadge: 'المزايا',
    additionalNotes: 'ملاحظات إضافية:',
    note1: 'توضيح أن الخصومات يتم تفعيلها تلقائياً عند الوصول لكل مستوى.',
    note2: 'يتم تحديث حالة العميل تلقائياً ويمكنه معرفة مستواه من خلال ملفه الشخصي.',
    note3: 'لا حاجة لتسجيل أو طلب النجوم يدوياً.',
    
    // FAQ Section
    faqTitle: 'الأسئلة الشائعة',
    faqSubtitle: 'عندك سؤال؟ إحنا جاوبناه',
    faqViewAll: 'شوف كل الأسئلة الشائعة',
    faq1Q: 'كيف يمكنني إجراء عملية شراء؟',
    faq1A: 'يمكنك إجراء عملية الشراء عن طريق اختيار المنتج، إضافته للسلة، ثم إتمام عملية الدفع بأمان.',
    faq2Q: 'ما هي طرق الدفع المتاحة؟',
    faq2A: 'نقبل جميع طرق الدفع الرئيسية: فيزا، ماستركارد، الدفع الإلكتروني، والمحافظ الرقمية.',
    faq3Q: 'كم يستغرق وصول الطلب؟',
    faq3A: 'الطلبات الرقمية تصل فوراً، بينما المنتجات الأخرى تحتاج من 1-3 أيام عمل.',
    faq4Q: 'هل يمكنني إلغاء أو تعديل الطلب؟',
    faq4A: 'يمكنك إلغاء أو تعديل الطلب خلال 24 ساعة من الطلب قبل بدء عملية التنفيذ.',
    
    // Extended FAQ for dedicated page
    faq5Q: 'كيف يمكنني التواصل مع خدمة العملاء؟',
    faq5A: 'يمكنك التواصل معنا عبر الواتساب، البريد الإلكتروني، أو نموذج الاتصال المتوفر في الموقع. نحن متواجدون 24/7.',
    faq6Q: 'هل يتوفر ضمان على المنتجات؟',
    faq6A: 'نعم، نوفر ضمان على جميع المنتجات الرقمية. في حالة وجود أي مشكلة، سنقوم بحلها فوراً أو استرداد المبلغ.',
    faq7Q: 'ما هي أساليب الحماية والأمان؟',
    faq7A: 'نستخدم أحدث تقنيات التشفير SSL وأنظمة الحماية المتقدمة لضمان أمان بياناتك ومعاملاتك.',
    faq8Q: 'هل يمكنني الحصول على فاتورة؟',
    faq8A: 'بالطبع، يتم إرسال فاتورة إلكترونية لكل عملية شراء تحتوي على جميع التفاصيل.',
    faq9Q: 'كيف أستخدم كود الخصم؟',
    faq9A: 'يمكنك إدخال كود الخصم في خانة "كود الخصم" أثناء عملية الدفع قبل إتمام الطلب.',
    faq10Q: 'ماذا لو لم أستلم المنتج؟',
    faq10A: 'في الحالات النادرة، إذا لم تستلم المنتج خلال المدة المحددة، تواصل معنا فوراً وسنحل المشكلة.',
    
    // FAQ Page
    faqPageTitle: 'الأسئلة الشائعة',
    faqPageSubtitle: 'جميع الإجابات التي تحتاجها في مكان واحد',
    faqSearchPlaceholder: 'ابحث عن سؤال...',
    faqCategoryAll: 'جميع الأسئلة',
    faqCategoryPayment: 'الدفع والشراء',
    faqCategoryDelivery: 'التوصيل والاستلام',
    faqCategorySupport: 'خدمة العملاء',
    faqCategoryAccount: 'الحساب والنجوم',
    faqCategorySecurity: 'الأمان والحماية',
    
    // Payment Methods
    paymentMethods: {
      badge: 'طرق الدفع',
      title: 'طرق الدفع الآمنة',
      subtitle: 'نوفر خيارات دفع متعددة وآمنة لضمان أن معاملاتك آمنة ومريحة، سواء كنت في مصر أو أي دولة أخرى.',
      purpose: {
        title: 'الهدف من القسم',
        description: 'يريد الزوار معرفة أن الموقع آمن في عمليات الدفع، ولديهم مرونة في اختيار وسيلة الدفع وتسليمهم، سواء كانوا داخل مصر أو في أي دولة عربية أو أجنبية.',
        features: [
          'اختر طريقة الدفع المناسبة لديك',
          'دفع آمن وسهل من أي مكان في العالم',
          'طرق دفع متنوعة تناسب احتياجك'
        ]
      },
      methods: {
        title: 'وسائل الدفع المدعومة',
        list: [
          {
            icon: '💳',
            name: 'Visa / MasterCard',
            description: 'بطاقات ميزة (في حال تم ربطها)'
          },
          {
            icon: '🏪',
            name: 'الدفع المحلي',
            description: 'الدفع من خلال شركاء محليين مثل فوري'
          },
          {
            icon: '🏦',
            name: 'التحويل البنكي',
            description: 'التحويل البنكي اليدوي (أو لبعض الدول)'
          },
          {
            icon: '📱',
            name: 'الدفع عند التواصل',
            description: 'الدفع عند التواصل (في حالة الدفع اليدوي أو المساعدة من الدعم)'
          }
        ]
      },
      security: {
        title: 'خيارات تقنية قابلة للتطوير لاحقاً',
        features: [
          {
            name: 'عرض الشروط الخاصة بكل طريقة دفع (مثلاً: عمولة - وقت الاستلام)',
            description: ''
          },
          {
            name: 'تفعيل عرض الوسائل المتاحة فقط حسب دولة الزائر (لو الموقع يدعم geo-location)',
            description: ''
          },
          {
            name: 'عرض تنبيه بسيط: "إذا لم تجد وسيلة مناسبة، تواصل معنا عبر الشات"',
            description: ''
          }
        ]
      },
      contactAlert: 'إذا لم تجد وسيلة مناسبة، تواصل معنا عبر الشات'
    },

    // Newsletter
    newsletter: {
      badge: 'الاشتراك في النشرة البريدية',
      title: 'متوتش العروض الحصرية',
      subtitle: 'سجل إيميلك وخليك أول واحد يعرف كل جديد',
      purpose: {
        title: 'الهدف من القسم',
        description: 'يساعد في بناء قاعدة عملاء مهتمين، ويفتح باب للتواصل المباشر والمجاني مع الجمهور.'
      },
      features: {
        title: 'عنوان جذاب (Heading)',
        examples: [
          'متوتش العروض الحصرية',
          'سجل إيميلك وخليك أول واحد يعرف كل جديد',
          'اشترك في نشرتنا البريدية ووصلك كل العروض أول بأول'
        ]
      },
      form: {
        title: 'حقل الإدخال (Input Field)',
        description: 'مكان لكتابة البريد الإلكتروني',
        placeholder: 'أدخل بريدك الإلكتروني',
        button: 'اشترك',
        success: 'تم الاشتراك بنجاح! شكراً لك'
      },
      assurance: {
        description: 'خصوصيتك تهمنا — مش هنشارك بياناتك مع أي طرف تالت'
      }
    },

    // Footer
    footer: {
      aboutUs: {
        title: 'عن الموقع',
        description: 'متجر رقمي متخصص في شحن الألعاب بأفضل الأسعار وخدمة سريعة وآمنة. نوفر خدمات شحن موثوقة لجميع الألعاب المشهورة.',
        linkText: 'من نحن'
      },
      quickLinks: {
        title: 'روابط سريعة',
        allProducts: 'جميع المنتجات',
        aboutUs: 'من نحن',
        faq: 'الأسئلة الشائعة',
        privacy: 'سياسة الخصوصية',
        exchangeRefund: 'سياسة الاستبدال والاسترداد',
        contact: 'تواصل معنا',
        starsSystem: 'نظام النجوم'
      },
      contactInfo: {
        title: 'معلومات التواصل',
        whatsapp: '+20 123 456 7890',
        email: 'support@midzilla.com'
      },
      socialMedia: {
        title: 'وسائل التواصل الاجتماعي',
        description: 'تابعنا على مواقع التواصل الاجتماعي للحصول على آخر العروض والأخبار'
      },
      security: {
        title: 'شهادات الأمان والثقة'
      },
      copyright: 'جميع الحقوق محفوظة',
      features: {
        responsive: 'متجاوب مع جميع الشاشات',
        secure: 'موقع آمن ومحمي'
      }
    },

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
    
    // Stars System
    starsSystemTitle: 'Customer Stars System',
    starsSystemSubtitle: 'Displayed within the main page sections, but in a brief and simplified manner',
    starsSystemDescription: 'Earn stars with every purchase!',
    starsSystemCTA: 'Learn more about the stars system',
    starsAndAdvantages: 'Star Levels and Advantages:',
    starLevel1: 'New Customer',
    starLevel1Desc: 'First purchase',
    starLevel1Benefit: 'No discount - Welcome only',
    starLevel2: 'Active Customer',
    starLevel2Desc: 'Second purchase',
    starLevel2Benefit: 'Permanent 1% discount coupon',
    starLevel3: 'Engaged Customer',
    starLevel3Desc: 'Third or fourth purchase',
    starLevel3Benefit: 'Permanent 1.5% discount coupon',
    starLevel4: 'Distinguished Customer',
    starLevel4Desc: 'Fifth or sixth purchase',
    starLevel4Benefit: 'Permanent 1.75% discount coupon',
    starLevel5: 'Gold Customer',
    starLevel5Desc: 'Seventh or eighth purchase',
    starLevel5Benefit: 'Permanent 2% discount coupon',
    levelBadge: 'Star Count',
    titleBadge: 'Title',
    operationsBadge: 'Number of Operations',
    benefitsBadge: 'Benefits',
    additionalNotes: 'Additional Notes:',
    note1: 'Clarification that discounts are automatically activated upon reaching each level.',
    note2: 'Customer status is automatically updated and they can know their level through their personal profile.',
    note3: 'No need to register or request stars manually.',
    
    // FAQ Section
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Got a question? We\'ve got you covered',
    faqViewAll: 'View All FAQs',
    faq1Q: 'How can I make a purchase?',
    faq1A: 'You can make a purchase by selecting the product, adding it to cart, then completing the secure payment process.',
    faq2Q: 'What payment methods are available?',
    faq2A: 'We accept all major payment methods: Visa, Mastercard, electronic payment, and digital wallets.',
    faq3Q: 'How long does delivery take?',
    faq3A: 'Digital orders arrive instantly, while other products need 1-3 business days.',
    faq4Q: 'Can I cancel or modify my order?',
    faq4A: 'You can cancel or modify your order within 24 hours of placing it before processing begins.',
    
    // Extended FAQ for dedicated page
    faq5Q: 'How can I contact customer service?',
    faq5A: 'You can contact us via WhatsApp, email, or the contact form available on the website. We\'re available 24/7.',
    faq6Q: 'Is there a warranty on products?',
    faq6A: 'Yes, we provide warranty on all digital products. In case of any issue, we\'ll solve it immediately or refund your money.',
    faq7Q: 'What are the security and protection methods?',
    faq7A: 'We use the latest SSL encryption technologies and advanced protection systems to ensure the security of your data and transactions.',
    faq8Q: 'Can I get an invoice?',
    faq8A: 'Of course, an electronic invoice is sent for every purchase containing all the details.',
    faq9Q: 'How do I use a discount code?',
    faq9A: 'You can enter the discount code in the "Discount Code" field during the payment process before completing the order.',
    faq10Q: 'What if I don\'t receive the product?',
    faq10A: 'In rare cases, if you don\'t receive the product within the specified time, contact us immediately and we\'ll solve the issue.',
    
    // FAQ Page
    faqPageTitle: 'Frequently Asked Questions',
    faqPageSubtitle: 'All the answers you need in one place',
    faqSearchPlaceholder: 'Search for a question...',
    faqCategoryAll: 'All Questions',
    faqCategoryPayment: 'Payment & Purchase',
    faqCategoryDelivery: 'Delivery & Receipt',
    faqCategorySupport: 'Customer Service',
    faqCategoryAccount: 'Account & Stars',
    faqCategorySecurity: 'Security & Protection',
    
    // Payment Methods
    paymentMethods: {
      badge: 'Payment Methods',
      title: 'Secure Payment Methods',
      subtitle: 'We offer multiple secure payment options to ensure your transactions are safe and convenient, whether you\'re in Egypt or any other country.',
      purpose: {
        title: 'Section Purpose',
        description: 'Visitors want to know that the site is secure in payment operations, and they have flexibility in choosing payment methods and receiving them, whether they are inside Egypt or in any Arab or foreign country.',
        features: [
          'Choose your preferred payment method',
          'Secure and easy payment from anywhere in the world',
          'Multiple payment options to suit your needs'
        ]
      },
      methods: {
        title: 'Supported Payment Methods',
        list: [
          {
            icon: '💳',
            name: 'Visa / MasterCard',
            description: 'Credit cards (if linked)'
          },
          {
            icon: '🏪',
            name: 'Local Payment',
            description: 'Payment through local partners such as Fawry'
          },
          {
            icon: '🏦',
            name: 'Bank Transfer',
            description: 'Manual bank transfer (or for some countries)'
          },
          {
            icon: '📱',
            name: 'Payment on Communication',
            description: 'Payment on communication (in case of manual payment or support assistance)'
          }
        ]
      },
      security: {
        title: 'Advanced Security Features',
        features: [
          {
            name: 'Display specific terms for each payment method (Example: commission - delivery time)',
            description: ''
          },
          {
            name: 'Enable available methods only according to the visitor\'s country (if the site supports geo-location)',
            description: ''
          },
          {
            name: 'Display simple warning: "If you find a suitable method, contact us via chat"',
            description: ''
          }
        ]
      },
      contactAlert: 'If you can\'t find a suitable method, contact us via chat'
    },

    // Newsletter
    newsletter: {
      badge: 'Newsletter Subscription',
      title: 'Don\'t Miss Exclusive Offers',
      subtitle: 'Register your email and be the first to know everything new',
      purpose: {
        title: 'Section Purpose',
        description: 'Helps build an interested customer base and opens the door for direct and free communication with the audience.'
      },
      features: {
        title: 'Attractive Heading',
        examples: [
          'Don\'t miss exclusive offers',
          'Register your email and be the first to know everything new',
          'Subscribe to our newsletter and get all offers first'
        ]
      },
      form: {
        title: 'Input Field',
        description: 'Place to write the email',
        placeholder: 'Enter your email',
        button: 'Subscribe',
        success: 'Successfully subscribed! Thank you'
      },
      assurance: {
        description: 'Your privacy matters to us — we won\'t share your data with any third party'
      }
    },

    // Footer
    footer: {
      aboutUs: {
        title: 'About Us',
        description: 'A digital store specialized in game charging with the best prices and fast, secure service.',
        linkText: 'Learn More'
      },
      quickLinks: {
        title: 'Quick Links',
        allProducts: 'All Products',
        aboutUs: 'About Us',
        faq: 'FAQ',
        privacy: 'Privacy Policy',
        exchangeRefund: 'Exchange & Refund Policy',
        contact: 'Contact Us',
        starsSystem: 'Stars System'
      },
      contactInfo: {
        title: 'Contact Info',
        whatsapp: '+20 123 456 7890',
        email: 'support@midzilla.com'
      },
      socialMedia: {
        title: 'Social Media',
        description: 'Follow us on social media for the latest offers and news'
      },
      security: {
        title: 'Security & Trust Certificates'
      },
      copyright: 'All rights reserved',
      features: {
        responsive: 'Responsive for all screens',
        secure: 'Secure and protected website'
      }
    },

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
    translations: translations[language],
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