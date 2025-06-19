# مكون Loader

مكون قابل لإعادة الاستخدام لعرض أنيميشن التحميل في التطبيق.

## الاستخدام

```jsx
import Loader from './components/Loader'

// استخدام أساسي
<Loader />

// استخدام مع خيارات مخصصة
<Loader size={400} backgroundColor="black" />
```

## الخصائص (Props)

- `size`: حجم الأنيميشن (افتراضي: 300)
- `backgroundColor`: لون الخلفية (افتراضي: 'white')

## مثال كامل

```jsx
import { useState, useEffect } from 'react'
import Loader from './components/Loader'

function MyComponent() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // منع التمرير أثناء التحميل
    document.body.style.overflow = isLoading ? 'hidden' : 'auto'
    
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = 'auto'
    }
  }, [isLoading])

  if (isLoading) {
    return <Loader />
  }

  return <div>محتوى التطبيق</div>
}
``` 