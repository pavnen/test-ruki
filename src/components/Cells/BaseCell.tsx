import React from 'react'
import styles from './BaseCell.module.css'

export interface BaseCellProps {
  icon: React.ReactNode
  caption: string
  text: string
}

export const BaseCell: React.FC<BaseCellProps> = ({icon, caption, text}) => (
  <div className={styles.cell}>
    <div>{icon}</div>
    <div className={styles.textWrapper}>
      <div className={styles.caption}>{caption}</div>
      <div className={styles.text}>{text}</div>
    </div>
  </div>
)
