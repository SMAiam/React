import logo from '../../img/logo.jpg'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useStatus from '../utils/useStatus'

const Header = () => {
  const [msg, setMsg] = useState(['Login'])
  console.log('header')
  const status = useStatus()

  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img className="logo" src={logo} />
      </div>

      <div className="menuContainer">
        <ul>
          <li>{status ? '🟢' : '🔴'}</li>
          <li>
            {' '}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Contact</li>
          <li>Cart</li>
          <li>
            <button
              onClick={() => setMsg(msg === 'Logout' ? 'Login' : 'Logout')}
            >
              {msg}
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Header
