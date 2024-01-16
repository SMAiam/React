import User from './User'
import UserClass from './UserClass'
import React from 'react'
class About extends React.Component {
  constructor(props) {
    super(props)
    console.log('Constructor parent')
  }

  componentDidMount() {
    console.log('didMount parent')
  }
  componentDidUpdate() {
    console.log('didUpdate parent')
  }
  componentWillUnmount() {
    console.log('willMount parent')
  }
  render() {
    console.log('render parent')
    return (
      <div>
        <h1>About</h1>
        <User
          name="Abhay Mishra"
          location="Fazilnagar"
          occupation="Software Engineer"
        />
        <UserClass
          name="Abhay Mishra"
          location="Fazilnagar"
          occupation="Software Engineer"
        />
      </div>
    )
  }
}

export default About
