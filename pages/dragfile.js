import Head from 'next/head'
import {useState} from 'react';

export default function DragFile() {

	const [src, setSrc] = useState(null);
	async function dropHandler(ev) {
	}


	function dragOverHandler(ev) {
	}

	return (
		<div>
			<div onDrop={dropHandler} onDragOver={dragOverHandler}>
				<p>Drag one or more files to this Drop Zone ...</p>
			</div>
		</div>
	)
}
