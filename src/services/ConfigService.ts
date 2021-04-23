import axios from 'axios'
import { APP_ID, BASE_URL } from '../common/constants'
import { DashConfig } from '../types'

export default class ConfigService {
  static async getConfig (): Promise<DashConfig | null> {
    try {
      const res = await axios.get(`${BASE_URL}/configuration/${APP_ID}/`)
      return res.data
    } catch (e) {
      console.log(e.message)
      return null
    }
  }
}
