import { createSlice } from '@reduxjs/toolkit'
import { ThemeState } from '../types/Theme';


// Define the initial state using that type
const initialState: ThemeState = {
  theme: "nord",
}

export const genSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    swapTheme: (state) => {
      const new_theme = state.theme==="dark"?"nord":"dark";
      return {
        ...state,
        theme: new_theme
      }
    },
  },
})

export const { swapTheme } = genSlice.actions

export default genSlice.reducer