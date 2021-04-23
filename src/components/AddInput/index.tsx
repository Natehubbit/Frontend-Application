import React, { FC } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import styles from './style.module.scss'

interface AddInputProps {
  placeholder: string
  onChange: (val: string) => void
  onAdd: () => void
  register: UseFormRegisterReturn
}

const AddInput: FC<AddInputProps> = ({
  placeholder,
  onChange,
  onAdd,
  register
}) => {
  return (
    <div className={styles.container}>
      <input
        {...register}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={onAdd}>Add</button>
    </div>
  )
}

export default AddInput
