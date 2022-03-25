import Head from 'next/head'
import { TouchBackend } from 'react-dnd-touch-backend'
//import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider, useDrag, useDrop } from 'react-dnd'

export default function DnD() {	

	return (
		<div>
			<DndProvider backend={TouchBackend} options={{
				enableTouchEvents:false,
				enableMouseEvents:true
			}}>

				
			</DndProvider>
		</div>
	)
}


const DragItem = () => {

	const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type: '',
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

	return <div ref={dragPreview}>
	</div>
}

const DropZone = () => {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: '',
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }))

	return <div
			ref={drop}
		>
		</div>
}