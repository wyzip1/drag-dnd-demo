import React, { useState } from 'react'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function DemoTest() {
  const [isFirst, setState] = useState(true);


  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', gap: 50 }}>
        <Drop change={setState} state={true}>
          {isFirst ? <Knight /> : null}
        </Drop>
        <Drop change={setState} state={false}>
          {isFirst ? null : <Knight />}
        </Drop>
      </div>
    </DndProvider>
  )
}


function Drop({ children, change, state }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'knight',
    drop: () => change(state),
    collect: monitor => ({
      isOver: monitor.isOver()
    })
  }));

  return <div
    ref={drop}
    style={{
      width: 500,
      height: 500,
      border: '1px solid #000',
      background: isOver ? 'yellow' : '#fff',
      opacity: isOver ? 0.5 : 1
    }}>
    {children}
  </div>
}

function Knight() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'knight',
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return <div
    ref={drag}
    style={{
      width: '100%',
      height: '100%',
      display: 'grid',
      placeItems: 'center',
      fontSize: 350,
      cursor: 'move'
    }}>
    ♘
  </div>
}