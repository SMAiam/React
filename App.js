import React, { Suspense, lazy } from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from './src/components/Header'
import Body from './src/components/Body'
import Error from './src/components/Error'
import About from './src/components/About'
import Restaurant from './src/components/Restaurant'
import UserContext from './src/utils/UserContext'
import { Provider } from 'react-redux'
import AppStore from './src/utils/AppStore'
// import Grocery from './src/components/Grocery'

const Grocery = lazy(() => import('./src/components/Grocery'))

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
// const element = <h1>This is h1 Element</h1>

// // console.log(element)
// const Component2 = () => {
//   return <h1>Functional Component2</h1>
// }

// const Component = () => {
//   return (
//     <div id="container">
//       {element}
//       <h1 className="heading">Functional Component</h1>
//       {/* <Component2 /> */}
//       {Component2()}
//     </div>
//   )
// }

// const element2 = (
//   <h1>
//     {element}This is h1 Element
//     <Component />
//   </h1>
// )

// --------------------------------------------------------------

const Layout = () => {
  const [user, setUser] = useState()
  return (
    <div className="layoutContainer">
      <Provider store={AppStore}>
        <UserContext.Provider value={{ loggedInUser: user, setUser }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>LOADING....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: '/restaurant/:id',
        element: <Restaurant />,
      },
    ],
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'))
// console.log(root)

root.render(<RouterProvider router={router} />)
