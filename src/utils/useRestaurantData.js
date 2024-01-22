import { useEffect, useState } from 'react'
import { RESTAURANT_API } from '../utils/constants'

const useRestaurantData = (id) => {
  const [details, setDetails] = useState()
  //console.log('hoook render')

  useEffect(() => {
    //console.log('hook useEffect')
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API + id)
    const json = await data.json()
    setDetails(json?.data)
  }
  return details
}
export default useRestaurantData
