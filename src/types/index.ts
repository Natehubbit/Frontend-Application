export interface Product {
  id: number | null
  name: string
  picture: string
  description: string
  user: {
    firstName: string
    lastName: string
    profilePicture: string
  }
  type: {
    id: number | null
    name: string
  }
  trl: {
    id: number | null
    name: string
  }
  company: {
    name: string
    address: {
      latitude: string
      longitude: string
    }
  }
  categories: {
    id: number | null
    name: string
  }[]
  businessModels: {
    id: number | null
    name: string
  }[]
}

export interface DashConfig {
  id: number
  logo: string
  mainColor: string
  hasUserSection: boolean
}
