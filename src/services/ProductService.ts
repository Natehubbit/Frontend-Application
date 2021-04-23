import axios from 'axios'
import { BASE_URL } from '../common/constants'
import { Product } from '../types'

export default class ProductService {
  static async getProduct (): Promise<Product | null> {
    try {
      const res = await axios.get(`${BASE_URL}/product/6781/`)
      return res.data
    } catch (e) {
      console.log(e.message)
      return null
    }
  }

  static async updateProduct (data: Product): Promise<boolean> {
    try {
      await axios.put(`${BASE_URL}/product/6781/`, data)
      return true
    } catch (e) {
      console.log(e.message)
      return false
    }
  }
}
