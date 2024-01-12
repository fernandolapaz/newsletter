import React from 'react'
import imgMobile from '../assets/images/illustration-sign-up-mobile.svg'
import imgDesktop from '../assets/images/illustration-sign-up-desktop.svg'
import Form from '../components/Form'
import { useNavigate } from 'react-router-dom'

export default function SignUp(props) {
	const navigate = useNavigate()

	// Submit
	const onSubmit = async data => {
		await new Promise(resolve => setTimeout(resolve, 1000))
		{
			props.handleFormData(data.email)
		}
		navigate('success')
	}

	return (
		<>
			<main className='signup'>
				<picture>
					<source
						media='(min-width: 50rem)'
						srcSet={imgDesktop}
					/>
					<img
						src={imgMobile}
						alt=''
						className='hero'
						width={375}
						height={284}
					/>
				</picture>

				<div className='info'>
					<h1 className='title'>Stay updated!</h1>
					<p>Join 60,000+ product managers receiving monthly updates on:</p>
					<ul>
						<li>Product discovery and building what matters</li>
						<li>Measuring to ensure updates are a success</li>
						<li>And much more!</li>
					</ul>

					<Form onSubmit={onSubmit} />
				</div>
			</main>
		</>
	)
}
