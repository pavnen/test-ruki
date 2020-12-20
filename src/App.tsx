import React, {useCallback, useEffect, useState} from 'react'
import {CellType, Field} from './components'

const DEAD_COUNT_TO_DEATH = 3
const ALIVE_COUNT_TO_LIFE = 2
const RANDOM_THRESHOLD = 0.49

function App() {
  const [cells, setCells] = useState<CellType[]>([])
  const [aliveCount, setAliveCount] = useState<number>(0)
  const [deadCount, setDeadCount] = useState<number>(0)

  const checkNewLife = useEffect(() => {
    if (aliveCount === ALIVE_COUNT_TO_LIFE) {
      setCells([CellType.life, ...cells])
      setAliveCount(0)
      setDeadCount(0)
    }
  }, [aliveCount])

  const checkDeath = useEffect(() => {
    if (deadCount === DEAD_COUNT_TO_DEATH) {
      setCells([...cells.slice(0, DEAD_COUNT_TO_DEATH), ...cells.slice(DEAD_COUNT_TO_DEATH + 1)])
      setDeadCount(0)
    }
  }, [deadCount])

  const addNewCell = useCallback(() => {
    const newCell = Math.random() > RANDOM_THRESHOLD ? CellType.dead : CellType.alive
    setCells([newCell, ...cells])
    if (newCell === CellType.alive) {
      setAliveCount(aliveCount + 1)
      setDeadCount(0)
    } else {
      if (cells[0] === CellType.life || deadCount > 0) {
        setDeadCount(deadCount + 1)
      }
      setAliveCount(0)
    }
  }, [cells, aliveCount, deadCount])

  return (
    <div className="App">
      <Field cells={cells} addNewCell={addNewCell} />
    </div>
  )
}

export default App
