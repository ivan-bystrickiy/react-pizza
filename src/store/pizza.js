import { createSlice } from '@reduxjs/toolkit'

export const pizzaSlice = createSlice({
  name: 'cart',
  initialState: {
    loading: false,
    error: null,
    list: [],
  },
  reducers: {
    startLoading: (state) => null,
    setPizzas: (state) => null,
    endLoading: (state) => null,
  },
})

export const { startLoading, endLoading, setPizzas } = pizzaSlice.actions

export default pizzaSlice.reducer