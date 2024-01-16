import React from 'react'

class UserClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: { name: 'dummy', location: 'pummy', occupation: 'yummy' },
    }
    console.log('Constructor child')
  }

  async componentDidMount() {
    console.log('didMount child')
    const data = await fetch('https://api.github.com/users/SMAiam')
    const json = await data.json()
    this.setState({ user: json })
  }
  componentDidUpdate() {
    console.log('didUpdate child')
  }
  componentWillUnmount() {
    console.log('willMount child')
  }
  render() {
    console.log('render child')
    return (
      <div className="userContainer">
        <h1>UserName:{this.state.user.login}</h1>
        <img src={this.state.user.avatar_url} />
        <h1>Name:{this.props.name}</h1>
        <h1>Location:{this.props.location}</h1>
        <h1>Occupation:{this.props.occupation}</h1>
      </div>
    )
  }
}
export default UserClass
