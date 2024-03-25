import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface State {
  theme: "dark" | "nord"
}

// Define the initial state using that type
const initialState: State = {
  theme: "nord",
}

export const genSlice = createSlice({
  name: 'general',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    swapTheme: (state) => {
      const new_theme = state.theme==='dark'?"nord":"dark";
      return {
        ...state,
        theme: new_theme
      }
    },
  },
})

export const { swapTheme } = genSlice.actions

export default genSlice.reducer