import CartReducer from './CartSlice'
import { configureStore } from '@reduxjs/toolkit'

const AppStore = configureStore({
  reducer: { cart: CartReducer },
})
export default AppStore
