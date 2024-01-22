import { BASE_IMG_URL } from '../utils/constants'
import UserContext from '../utils/UserContext'
import { useSelector, useDispatch } from 'react-redux'
import { current } from '@reduxjs/toolkit'
import { useContext } from 'react'
import { add } from '../utils/CartSlice'

const MenuCard = ({ obj }) => {
  const user = useContext(UserContext)
  const dispatch = useDispatch()
  const store = useSelector((store) => store)
  const cartSize = store?.cart.items?.length
  // console.log(user)
  const handleAddToCart = () => {
    dispatch(add('pizza'))
  }
  return (
    <div className="cardContainer">
      <div className="imageContainer">
        <img src={BASE_IMG_URL + obj.cloudinaryImageId} />
      </div>
      <div className="descriptionContainer">
        <h2>{obj.name}</h2>
      </div>
      <h4>{'Rating' + obj.avgRating}</h4>
      <h4>{obj.costForTwo}</h4>
      <h4>{user.loggedInUser}</h4>
      <h4>{cartSize}</h4>
      <button
        onClick={() => {
          handleAddToCart()
        }}
      >
        Add to cart
      </button>
    </div>
  )
}
export default MenuCard
