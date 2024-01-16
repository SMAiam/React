import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import useRestaurantData from '../utils/useRestaurantData'

const Restaurant = () => {
  const { id } = useParams()
  const details = useRestaurantData(id)
  //const [data, setData] = useState()
  //console.log('parent render')
  // useEffect(() => {
  //   console.log('restaurant useEffect')
  //   //setData('rrrr')
  // }, [])
  if (details === undefined) {
    return <Shimmer />
  }

  return (
    <div>
      <h1>{details.name} </h1>
      <h2>{details.city}</h2>
      <h4>{details.costForTwoMessage}</h4>
      <h5>{details.cuisines.join(',')}</h5>
    </div>
  )
}
export default Restaurant
