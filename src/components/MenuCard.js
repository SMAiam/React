import { BASE_IMG_URL } from '../utils/constants'
const MenuCard = ({ obj }) => {
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
    </div>
  )
}
export default MenuCard
