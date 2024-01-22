import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import useRestaurantData from '../utils/useRestaurantData'
import Cordion from './Cordion'

const Restaurant = () => {
  const { id } = useParams()
  const details = useRestaurantData(id)

  //console.log(data)

  //const [data, setData] = useState()
  //console.log('parent render')
  // useEffect(() => {
  //   console.log('restaurant useEffect')
  //   //setData('rrrr')
  // }, [])

  if (details === undefined) {
    return <Shimmer />
  }

  const data =
    details?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (obj) => {
        return (
          obj?.card?.card?.['@type'] ===
          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        )
      }
    )
  console.log(data)
  return (
    <div className="restaurantContainer">
      <div className="restaurantHeader">
        <h1>{details?.cards[0].card?.card?.info?.name} </h1>
        <h5>{details?.cards[0].card?.card?.info?.cuisines.join(',')}</h5>
      </div>
      <div>{/* <Cordion obj={data} /> */}</div>
    </div>
  )
}
export default Restaurant
