import React from 'react'
import { Link } from 'react-router-dom'

const style = {
	backgroundColor: '#212121',
	borderRadius: '0.25rem',
	padding: '1rem',
	color: '#eee',
}

export default function NoPage() {
	return (
		<div style={style}>
			<h1>This page doesn't exist 🤷🏻‍♂️</h1>
			<p>
				Back <Link to='/'>Home</Link>
			</p>
		</div>
	)
}
