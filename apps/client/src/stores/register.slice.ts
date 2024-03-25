import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Gender, Register } from '../types/Register'


// Define the initial state using that type
const initialState: Register = {
  step: 1,
  data: {
    firstName: "",
    lastName: "",
    email:"",
    password: "",
    gender: Gender.male
  }
}

export const registerSlice = createSlice({
  name: 'register',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeStep : (state, action:PayloadAction<number>) => {
        return {
            ...state, step:action.payload
        }
    },
    setData: (state, action:PayloadAction<Omit<Register, "step">>) => {
      return {
        ...state, ...action.payload
      }
    }
  },
})

export const { changeStep, setData } = registerSlice.actions

export default registerSlice.reducer