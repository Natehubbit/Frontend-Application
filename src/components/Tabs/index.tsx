import Card from '../Card'
import styles from './style.module.scss'
import cn from 'classnames/bind'
import { FC, useState } from 'react'
import { useProduct } from '../../hooks/useProduct'
import AttributeItem from '../AttributeItem'

const cx = cn.bind(styles)

interface TabsProps {
  color: string
}

const Tabs: FC<TabsProps> = ({ color }) => {
  const [active, setActive] = useState<'description' | 'attributes'>(
    'description'
  )
  const { description, categories, businessModels, trl } = useProduct()
  const isDescription = active === 'description'
  const onDescription = () => {
    setActive('description')
  }
  const onAttributes = () => {
    setActive('attributes')
  }
  const checkActive = (val: string) => {
    return active === val
  }
  return (
    <div className={styles.container}>
      <Card>
        <div className={styles.tabBtns}>
          <button
            style={{
              background: checkActive('description') ? color : ''
            }}
            onClick={onDescription}
            className={cx({
              btn: true,
              active: checkActive('description')
            })}
          >
            Description
          </button>
          <button
            style={{
              background: checkActive('attributes') ? color : ''
            }}
            onClick={onAttributes}
            className={cx({
              btn: true,
              active: checkActive('attributes')
            })}
          >
            Attributes
          </button>
        </div>
        {isDescription
          ? (
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: description }}
          />
            )
          : (
          <div className={styles.attributes}>
            {[categories, businessModels, [trl]].map((d, i) => {
              const label =
                i === 0
                  ? ['Categories', 'categories']
                  : i === 1
                    ? ['Business Models', 'businessModels']
                    : ['TRL', 'trl']
              return (
                <AttributeItem
                  isTextarea={label[1] === 'trl'}
                  dontAdd={label[1] === 'trl'}
                  key={i}
                  options={d}
                  label={label[0]}
                  id={label[1] as 'categories' | 'businessModels' | 'trl'}
                />
              )
            })}
          </div>
            )}
      </Card>
    </div>
  )
}

export default Tabs
