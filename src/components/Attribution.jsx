import React from 'react'
import { FaAngleLeft } from 'react-icons/fa6'

export default function Attribution() {
	const [show, setShow] = React.useState(false)
	const [hover, setHover] = React.useState(false)

	const handleToggle = () => {
		setShow(prevShow => !prevShow)
	}

	// Styles
	const box = {
		position: 'fixed',
		bottom: '1rem',
		right: show ? '0.5rem' : '-12.5rem',
		transition: '0.3s',
		display: 'flex',
		alignItems: 'center',
		padding: '1rem',
		color: '#fff',
		backgroundColor: show ? 'rgba(50, 50, 50, 0.75)' : 'transparent',
		backdropFilter: show ? 'blur(0.15rem)' : 'none',
		borderRadius: '0.5rem',
	}

	const btn = {
		width: '3rem',
		height: '3rem',
		backgroundColor: show ? 'transparent' : '#99a',
		borderRadius: '50% 0 0 50%',
		translate: hover && !show ? '-0.5rem' : '0rem',
		rotate: show ? '180deg' : '0deg',
		order: show ? '1' : '0',
	}

	const handleMouseEnter = () => {
		setHover(true)
	}

	const handleMouseLeave = () => {
		setHover(false)
	}

	const arrow = {
		color: 'fff',
		width: '2rem',
		scale: hover && show ? '1.05' : '1',
	}

	const attribution = {
		fontSize: '13px',
		textAlign: 'center',
		visibility: show ? 'visible' : 'hidden',
	}

	return (
		<div style={box}>
			<button
				style={btn}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				type='button'
				className='btn'
				title={!show ? 'Show attribution' : ''}
				aria-label={show ? 'Hide attribution' : 'Show attribution'}
				aria-expanded={show ? 'true' : 'false'}
				onClick={handleToggle}
			>
				<FaAngleLeft
					style={arrow}
					aria-hidden='true'
				/>
			</button>
			<p style={attribution}>
				Challenge by{' '}
				<a href='https://www.frontendmentor.io?ref=challenge'>
					Frontend Mentor
				</a>
				.
				<br />
				Coded by{' '}
				<a
					href='https://www.frontendmentor.io/profile/fernandolapaz'
					title='Frontend Mentor Profile'
					aria-label='Frontend Mentor Profile'
				>
					Fernando
				</a>
				.
			</p>
		</div>
	)
}
