import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Board from '../Board'

export default function Example({ knightPosition }) {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{
        width: '30vw',
        height: '30vw'
      }}>
        <Board knightPosition={knightPosition} />
      </div>
    </DndProvider>
  )
}
