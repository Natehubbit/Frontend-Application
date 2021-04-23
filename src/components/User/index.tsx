import { FC } from 'react'
import { useProduct } from '../../hooks/useProduct'
import Card from '../Card'
import styles from './style.module.scss'

const User: FC = () => {
  const {
    company: { name: companyName },
    user: { profilePicture, firstName, lastName }
  } = useProduct()
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <img className={styles.img} src={profilePicture} alt="user" />
        <div className={styles.dets}>
          <div className={styles.name}>{`${firstName} ${lastName}`}</div>
          <div className={styles.position}>{companyName}</div>
        </div>
      </Card>
    </div>
  )
}

export default User
