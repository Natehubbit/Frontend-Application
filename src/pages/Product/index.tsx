import { useEffect } from 'react'
import Map from '../../components/Map'
import Navbar from '../../components/Navbar'
import ProductImage from '../../components/ProductImage'
import ProductInfo from '../../components/ProductInfo'
import Sidebar from '../../components/Sidebar'
import Tabs from '../../components/Tabs'
import User from '../../components/User'
import { useConfig } from '../../hooks/useConfig'
import { useLoader } from '../../hooks/useLoader'
import { productActions } from '../../redux/slices/productSlice'
import { useDispatch } from '../../redux/store'
import styles from './style.module.scss'

const Product = () => {
  const dispatch = useDispatch()
  const { loading: loadingConfig, config } = useConfig()
  const showUser = !loadingConfig && config && config.hasUserSection
  const loading = useLoader()
  useEffect(() => {
    dispatch(productActions.getProduct())
  }, [])
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.body}>
        <Sidebar color={config?.mainColor || ''} />
        <div className={styles.content}>
          {loading
            ? (
            <p>loading...</p>
              )
            : (
            <>
              <div className={styles.product}>
                <ProductImage />
                <ProductInfo />
                <Tabs color={config?.mainColor || ''} />
              </div>
              <div className={styles.extra}>
                {showUser && <User />}
                <Map />
              </div>
            </>
              )}
        </div>
      </div>
    </div>
  )
}

export default Product
