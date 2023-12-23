// const element = React.createElement(
//   'h1',
//   { id: 'heading', xyz: 'abc' },
//   'HELLO WORLD FROM REACT'
// )

const element = React.createElement(
  'div',
  {},
  React.createElement('div', {}, [
    React.createElement('h1', {}, 'child1'),
    React.createElement('h1', {}, 'child2'),
  ])
)
console.log(element) //element is an JS Object ,not the h1 tag
const root = ReactDOM.createRoot(document.getElementById('root'))
console.log(root)
root.render(element)
