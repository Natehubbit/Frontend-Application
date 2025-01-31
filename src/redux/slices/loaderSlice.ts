import { createSlice } from '@reduxjs/toolkit'

const initialState = false

export const { actions, ...loaderSlice } = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    loading () {
      return true
    },
    loaded () {
      return false
    }
  }
})

export const loaderActions = {
  ...actions
}
