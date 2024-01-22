// import pulao from '../../img/pulao.jpg'
// import paneer from '../../img/paneer.jpg'
import MenuCard from './MenuCard'
import { useContext, useEffect, useState } from 'react'
import { API, BASE_IMG_URL } from '../utils/constants'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import PromotedRestaurant from './PromotedRestaurant'
import UserContext from '../utils/UserContext'

const Body = () => {
  // const resList = [
  //   {
  //     img: pulao,
  //     desc: 'Biryani Asian,NorthIndian',
  //     rating: '4.3',
  //     price: '160/kg',
  //   },
  //   {
  //     img: paneer,
  //     desc: 'Paneer Asian,NorthIndian',
  //     rating: '4.7',
  //     price: '260/kg',
  //   },
  // ]
  const [list, setList] = useState([])
  const [dummyList, setDummyList] = useState([])
  const [searchText, setSearchText] = useState('')
  const LabeledRestaurant = PromotedRestaurant(MenuCard)
  useEffect(() => {
    retrieve().catch((err) => console.log(err))
  }, [])

  async function retrieve() {
    const data = await fetch(API)

    const json = await data.json()
    console.log(typeof json, json, typeof data, data)
    setList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )

    setDummyList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
  }
  if (list.length === 0 || dummyList.length === 0) {
    return <Shimmer />
  }
  // console.log(list)
  const { loggedInUser, setUser } = useContext(UserContext)
  return (
    <div className="borderContainer">
      <div className="searchContainer">
        <input
          type="text"
          value={loggedInUser}
          onChange={(e) => setUser(e.target.value)}
        ></input>
        <button
          onClick={() =>
            setDummyList(list.filter((obj) => obj.info.avgRating > 4.5))
          }
        >
          Filter Based on Rating
        </button>

        <div className="searchBar">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              setDummyList(
                list.filter((obj) => obj.info.name.includes(searchText))
              )
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="foodContainer">
        {dummyList?.map((obj) => {
          return obj.info.id === '64649' ? (
            <Link to={'/restaurant/' + obj.info.id}>
              <LabeledRestaurant key={obj.info.id} obj={obj.info} />
            </Link>
          ) : (
            <Link to={'/restaurant/' + obj.info.id}>
              <MenuCard key={obj.info.id} obj={obj.info} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
export default Body
