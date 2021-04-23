import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppselector
} from 'react-redux'
import { loaderSlice } from '../slices/loaderSlice'
import { productSlice } from '../slices/productSlice'

const rootReducer = combineReducers({
  [productSlice.name]: productSlice.reducer,
  [loaderSlice.name]: loaderSlice.reducer
})

export const store = configureStore({
  reducer: rootReducer
})

export type AppState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch

export const useDispatch = () => useAppDispatch<AppDispatch>()

export const useSelector: TypedUseSelectorHook<AppState> = useAppselector
