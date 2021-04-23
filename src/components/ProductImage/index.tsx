import { FC } from 'react'
import { useProduct } from '../../hooks/useProduct'
import Card from '../Card'
import styles from './style.module.scss'

const ProductImage: FC = () => {
  const { picture } = useProduct()
  return (
    <div className={styles.container}>
      <Card backgroundImage={picture} />
    </div>
  )
}

export default ProductImage
