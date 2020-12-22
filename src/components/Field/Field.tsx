import React from 'react'
import styles from './Field.module.css'
import {DeadCell, AlifeCell, NewLifeCell} from '../../components'

export enum CellType {
  alive = 'alive',
  dead = 'dead',
  life = 'life'
}

export interface FieldProps {
  addNewCell: () => void
  cells: CellType[]
}

const getCell = (cell: CellType, key: string | number): React.ReactNode => {
  switch (cell) {
    case CellType.dead:
      return <DeadCell key={key} />
    case CellType.alive:
      return <AlifeCell key={key} />
    case CellType.life:
      return <NewLifeCell key={key} />
  }
}

export const Field: React.FC<FieldProps> = ({addNewCell, cells}) => {
  return (
    <div className={styles.field}>
      <div className={styles.header}>Kлеточное наполнение</div>
      <div className={styles.cells}>{cells.map(getCell)}</div>
      <button className={styles.button} onClick={addNewCell}>
        сотворить
      </button>
    </div>
  )
}
