import { useMediaQuery } from 'react-responsive'

const useDevice = () => {
  const isLarge = useMediaQuery({ minWidth: 800 })

  if (isLarge) return 'lg'

  return 'xs'
}

export default useDevice
