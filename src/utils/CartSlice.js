import { createSlice, current } from '@reduxjs/toolkit'

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload)
      console.log(current(state))
    },
    remove: () => {
      state.items.pop()
    },
    clear: () => {
      state.items.length = 0
    },
  },
})
export const { add, remove, clear } = CartSlice.actions
export default CartSlice.reducer
