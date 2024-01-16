import { useEffect, useState } from 'react'

const useStatus = () => {
  console.log('useStatus')
  const [status, setStatus] = useState(true)
  useEffect(() => {
    console.log('useStatus useEffect')
    window.addEventListener('online', () => {
      console.log('online')
      setStatus(true)
    })
    window.addEventListener('offline', () => {
      console.log('offline')
      setStatus(false)
    })
  }, [])

  return status
}

export default useStatus
