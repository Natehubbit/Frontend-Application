import { FC } from 'react'
import { useProduct } from '../../hooks/useProduct'
import Card from '../Card'
import Tag from '../Tag'
import styles from './style.module.scss'

const ProductInfo: FC = () => {
  const { name, type } = useProduct()
  return (
    <div className={styles.container}>
      <Card className={styles.body}>
        <header className={styles.head}>{name}</header>
        <Tag>{type.name}</Tag>
      </Card>
    </div>
  )
}

export default ProductInfo
