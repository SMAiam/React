import { BASE_IMG_URL } from '../utils/constants'
const Cordion = ({ data }) => {
  console.log(data)
  //   return data.map((obj) => {
  //     return (
  //       <div className="cordionContainer">
  //         <div className="cordionHeader">
  //           <h3>
  //             {obj?.card?.card?.title}
  //             {'(' + obj?.card?.card?.itemCards?.length + ')'}
  //           </h3>
  //           <div className="cordionDescription">
  //             {obj?.card?.card?.itemCards?.map((data) => {
  //               return (
  //                 <div>
  //                   <p>{data?.card?.info?.name}</p>
  //                   <p>{data?.card?.info?.price}</p>
  //                   <img src="BASE_IMG_URL+data?.card?.info?.imageId" />
  //                 </div>
  //               )
  //             })}
  //           </div>
  //         </div>
  //         <div className="cordionDescription"></div>
  //       </div>
  //     )
  //   })
}
export default Cordion
