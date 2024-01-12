import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

// Animation
const variants = {
	start: { pathLength: 0 },
	end: {
		pathLength: 1,
		transition: {
			delay: 0.25,
			duration: 2,
			type: 'spring',
			stiffness: 300,
		},
	},
}

export default function Success(props) {
	const navigate = useNavigate()

	return (
		<main
			className='success'
			role='alert'
		>
			<div className='message'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='64'
					height='64'
					viewBox='0 0 64 64'
					aria-hidden='true'
				>
					<defs>
						<linearGradient
							id='a'
							x1='100%'
							x2='0%'
							y1='0%'
							y2='100%'
						>
							<stop
								offset='0%'
								stopColor='#FF6A3A'
							/>
							<stop
								offset='100%'
								stopColor='#FF527B'
							/>
						</linearGradient>
					</defs>
					<g fill='none'>
						<circle
							cx='32'
							cy='32'
							r='32'
							fill='url(#a)'
						/>
						<motion.path
							stroke='#FFF'
							strokeWidth='4'
							d='m18.286 34.686 8.334 7.98 19.094-18.285'
							variants={variants}
							initial='start'
							animate='end'
						/>
					</g>
				</svg>

				<h1 className='title'>Thanks for subscribing!</h1>

				<p>
					A confirmation email has been sent to <span>{props.userEmail}</span>.
					Please open it and click the button inside to confirm your
					subscription.
				</p>
			</div>

			<button
				type='button'
				className='btn btn-primary'
				onClick={() => navigate(-1)}
			>
				Dismiss message
			</button>
		</main>
	)
}
