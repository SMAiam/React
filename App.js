import React from 'react'
import ReactDOM from 'react-dom/client'
// const element = React.createElement(
//   'h1',
//   { id: 'heading', xyz: 'abc' },
//   'HELLO WORLD FROM REACT'
// )

// const element = React.createElement(
//   'div',
//   {},
//   React.createElement('div', {}, [
//     React.createElement('h1', {}, 'child1'),
//     React.createElement('h1', {}, 'child2'),
//   ])
// )
// console.log(element) //element is an JS Object ,not the h1 tag
const element = <h1>This is h1 Element</h1>

// console.log(element)
const Component2 = () => {
  return <h1>Functional Component2</h1>
}

const Component = () => {
  return (
    <div id="container">
      {element}
      <h1 className="heading">Functional Component</h1>
      {/* <Component2 /> */}
      {Component2()}
    </div>
  )
}

const element2 = (
  <h1>
    {element}This is h1 Element
    <Component />
  </h1>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
// console.log(root)
root.render(element2)
