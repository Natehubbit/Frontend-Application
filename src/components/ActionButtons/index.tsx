import React, { FC } from 'react'
import { Edit2 as Edit, Plus, X } from 'react-feather'
import IconButton from '../IconButton'
import styles from './style.module.scss'

interface ActionButtonProps {
  onEdit: () => void
  onAdd: () => void
  onCancel: () => void
  dontAdd: boolean
  mode: '' | 'editting' | 'adding'
}

const ActionButtons: FC<ActionButtonProps> = ({
  onEdit,
  onAdd,
  onCancel,
  mode,
  dontAdd
}) => {
  const isEditing = mode === 'editting'
  const isAdding = mode === 'adding'
  const hasAction = isEditing || isAdding
  return (
    <div className={styles.container}>
      {!hasAction && (
        <IconButton onClick={onEdit}>
          <Edit size={16} color="#193480" />
        </IconButton>
      )}
      {!hasAction && !dontAdd && (
        <IconButton onClick={onAdd}>
          <Plus size={16} />
        </IconButton>
      )}
      {hasAction && (
        <IconButton onClick={onCancel}>
          <X size={16} color="red" />
        </IconButton>
      )}
    </div>
  )
}

export default ActionButtons
