import { FC, useCallback, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import Card from '../Card'
import styles from './style.module.scss'
import { useProduct } from '../../hooks/useProduct'

const Map: FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY || ''
  })
  const [, setMap] = useState(null)
  const {
    company: { address }
  } = useProduct()

  const onUnmount = useCallback(function callback () {
    setMap(null)
  }, [])
  const { longitude: lng, latitude: lat } = address
  const coord = { lat: Number(lat), lng: Number(lng) }
  return isLoaded
    ? (
    <div className={styles.container}>
      <Card>
        <GoogleMap
          mapContainerStyle={{ height: '100%' }}
          center={coord}
          zoom={10}
          onUnmount={onUnmount}
        >
          <Marker position={coord} />
        </GoogleMap>
      </Card>
    </div>
      )
    : null
}

export default Map
