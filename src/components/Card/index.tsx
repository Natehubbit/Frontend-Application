import React, { FC, HTMLAttributes } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  backgroundImage?: string
}

const Card: FC<CardProps> = ({
  children,
  backgroundImage: back,
  className,
  ...props
}) => {
  const background = back
    ? { backgroundImage: `url(${back})` }
    : { backgroundColor: '#fff' }
  return (
    <div
      {...props}
      style={background}
      className={cn(styles.container, className)}
    >
      {children}
    </div>
  )
}

export default Card
