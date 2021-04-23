import { useSelector } from '../redux/store'

export const useProduct = () => useSelector((state) => state.product)
