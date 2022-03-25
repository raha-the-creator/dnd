import React, {useState} from 'react';
import { useDrag, useDrop } from 'react-dnd'


const Book = ({
  //props
}) => {
	const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type: 'book',
    item: {},
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  }))

  //console.log(isDragging);

	return <div ref={dragPreview} >
	</div>
}

export default Book;