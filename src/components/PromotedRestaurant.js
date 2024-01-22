//HIGHER ORDERED COMPONENT
const PromotedRestaurant = (MenuCard) => {
  console.log('in PromotedRestaurant')
  return ({ key, obj }) => {
    console.log(key, obj)
    return (
      <div>
        <label className="promoted">Promoted</label>
        <MenuCard key={key} obj={obj} />
      </div>
    )
  }
}
export default PromotedRestaurant
