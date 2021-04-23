import React, { ChangeEvent, FC, useState } from 'react'
import { Product } from '../../types'
import ActionButtons from '../ActionButtons'
import AddInput from '../AddInput'
import styles from './style.module.scss'
import { useForm } from 'react-hook-form'
import { useDispatch } from '../../redux/store'
import { productActions } from '../../redux/slices/productSlice'

interface AttributeItemProps {
  label: string
  options: Product['categories']
  id: 'categories' | 'trl' | 'businessModels'
  dontAdd: boolean
  isTextarea?: boolean
}

const AttributeItem: FC<AttributeItemProps> = ({
  label,
  options,
  id,
  dontAdd,
  isTextarea
}) => {
  const dispatch = useDispatch()
  const { reset, register, setValue, getValues } = useForm()
  const [mode, setMode] = useState<'' | 'adding' | 'editting'>('')
  const onEditing = () => {
    setMode('editting')
  }
  const onAdding = () => {
    setMode('adding')
  }
  const onCancelMode = () => {
    setMode('')
  }
  const onAddInputChange = (val: string) => {}
  const onAdd = () => {
    const val = getValues()
    dispatch(productActions.addToProduct(id, val[id]))
    reset()
  }
  const onUpdate = (itemId?: number | null) => {
    const val = getValues()
    if (id === 'categories' || id === 'businessModels') {
      itemId && dispatch(productActions.updateProduct(id, val[id], itemId))
    } else {
      dispatch(productActions.updateProduct(id, val[id]))
    }
    reset()
    onCancelMode()
  }
  const onInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target
    setValue(id, value)
  }
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h3>{label}</h3>
        <ActionButtons
          dontAdd={dontAdd}
          mode={mode}
          onAdd={onAdding}
          onCancel={onCancelMode}
          onEdit={onEditing}
        />
      </div>
      {mode === 'adding' && (
        <AddInput
          register={register(id)}
          onAdd={onAdd}
          onChange={onAddInputChange}
          placeholder="Add"
        />
      )}
      <ul>
        {options.map((opt) => {
          return mode === 'editting'
            ? (
            <div className={styles.input}>
              {!isTextarea
                ? (
                <input defaultValue={opt.name} onChange={onInputChange} />
                  )
                : (
                <textarea defaultValue={opt.name} onChange={onInputChange} />
                  )}
              <div>
                <button
                  className={styles.submit}
                  onClick={() => onUpdate(opt.id || null)}
                >
                  Update
                </button>
              </div>
            </div>
              )
            : (
            <li key={opt.id}>{opt.name}</li>
              )
        })}
      </ul>
    </div>
  )
}

export default AttributeItem
