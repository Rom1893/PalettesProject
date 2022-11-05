import React from 'react'
import DraggableColorBox from './DraggableColorBox'
import { SortableContainer } from 'react-sortable-hoc'

const DraggableColorList = SortableContainer(({colors, removeColor}) => {

    return (
        <div style={{height: "100%"}}>
            {colors.map((m, i) => (
            <DraggableColorBox
            index={i}
            key={m.name} 
            color={m.color} 
            name={m.name} 
            handleClick={()=> removeColor(m.name)}
            />
          ))}
        </div>
    );
})

export default DraggableColorList