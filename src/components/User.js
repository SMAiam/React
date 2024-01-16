const User = ({ name, location, occupation }) => {
  return (
    <div className="userContainer">
      <h1>Name:{name}</h1>
      <h1>Location:{location}</h1>
      <h1>Occupation:{occupation}</h1>
    </div>
  )
}
export default User
