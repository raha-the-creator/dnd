import { useDrag, useDrop } from 'react-dnd'

const Dropzone = ({
  //props
}) => {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: '',
    drop:(item, monitor)=>{

    },
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

export default Dropzone