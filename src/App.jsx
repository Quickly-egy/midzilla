import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
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

  // عرض محتوى التطبيق الرئيسي بعد انتهاء الأنيميشن
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
