import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ProductService from '../../services/ProductService'
import { Product } from '../../types'
import { loaderActions } from './loaderSlice'
import { AppDispatch, AppState } from '../store'
import { v4 as uuid } from 'uuid'

const initialState: Product = {
  id: null,
  businessModels: [],
  categories: [],
  description: '',
  picture: '',
  company: {
    name: '',
    address: {
      latitude: '',
      longitude: ''
    }
  },
  name: '',
  trl: {
    id: null,
    name: ''
  },
  type: {
    id: null,
    name: ''
  },
  user: {
    firstName: '',
    lastName: '',
    profilePicture: ''
  }
}

export const { actions, ...productSlice } = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProduct (_, { payload }: PayloadAction<Product>) {
      return payload
    },
    updateProduct (state, { payload }: PayloadAction<Product>) {
      if (state !== null) {
        return { ...state, ...payload }
      }
    }
  }
})

const getProduct = () => async (dispatch: AppDispatch) => {
  dispatch(loaderActions.loading())
  const data = await ProductService.getProduct()
  data && dispatch(actions.getProduct(data))
  dispatch(loaderActions.loaded())
}

const addToProduct = (id: keyof Product, data: Partial<Product>) => async (
  dispatch: AppDispatch,
  getState: () => AppState
) => {
  const { product } = getState()
  if (id === 'categories' || id === 'businessModels') {
    const update = {
      ...product,
      [id]: [...product[id], { name: data, id: uuid() }]
    }
    const updated = await ProductService.updateProduct(update)
    updated && dispatch(actions.updateProduct(update))
  }
}

const updateProduct = (
  id: keyof Product,
  data: Partial<Product>,
  itemId?: number
) => async (dispatch: AppDispatch, getState: () => AppState) => {
  const { product } = getState()
  console.log(product)
  let update
  if (id === 'trl') {
    update = {
      ...product,
      [id]: {
        ...(product[id] as Product['trl']),
        name: data
      }
    }
  } else {
    const p = product[id] as Product['categories']
    const hasItem = p.filter((item) => item.id === itemId).length > 0
    update = hasItem
      ? {
          ...product,
          [id]: [
            ...(product[id] as Product['categories']).map((item) => {
              if (item.id === itemId) {
                return { ...item, name: data }
              }
              return item
            })
          ]
        }
      : product
  }

  console.log(update)
  dispatch(loaderActions.loaded())
  const updated = await ProductService.updateProduct(update as Product)
  updated && dispatch(actions.updateProduct(update as Product))
}

export const productActions = {
  ...actions,
  getProduct,
  updateProduct,
  addToProduct
}
