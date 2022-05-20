import React from 'react'
import { useDrag } from 'react-dnd'

function Knight() {
  const [{isDragging}, drag] = useDrag(() => ({
    type: 'knight',
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div
      ref={drag}
      style={{
        width: '100%',
        height: '100%',
        opacity: isDragging ? 0.5 : 1,
        fontWeight: 'bold',
        cursor: 'move',
        display: 'grid',
        placeItems: 'center'
      }}
    >
      ♘
    </div>
  )
}

export default Knight