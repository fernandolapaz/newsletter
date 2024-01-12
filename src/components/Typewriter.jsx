import React from 'react'

export default function Typewriter({ content, delay }) {
	const [text, setText] = React.useState('')
	const [index, setIndex] = React.useState(0)

	React.useEffect(() => {
		if (index < content.length) {
			const timeout = setTimeout(() => {
				setText(prevText => prevText + content[index])
				setIndex(prevIndex => prevIndex + 1)
			}, delay)
			return () => clearTimeout(timeout)
		}
	}, [index])

	return { text }
}
