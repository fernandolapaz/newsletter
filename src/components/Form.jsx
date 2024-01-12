import React from 'react'
import { useForm } from 'react-hook-form'

export default function Form(props) {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		getValues,
	} = useForm({ mode: 'onBlur' })

	// Typing animation
	const [text, setText] = React.useState('')
	const [index, setIndex] = React.useState(0)

	React.useEffect(() => {
		const content = 'email@company.com'
		if (index < content.length) {
			const timeout = setTimeout(() => {
				setText(prevText => prevText + content[index])
				setIndex(prevIndex => prevIndex + 1)
			}, 125)
			return () => clearTimeout(timeout)
		}
	}, [index])

	return (
		<form
			onSubmit={handleSubmit(props.onSubmit)}
			noValidate
		>
			<label
				htmlFor='email'
				aria-label='Please enter an email address to stay updated'
			>
				Email address
			</label>
			<input
				type='email'
				id='email'
				placeholder={text}
				{...register('email', {
					required: 'Email required',
					pattern: {
						value: /.+@.+\..+/,
						message: 'Valid email required',
					},
				})}
				aria-invalid={errors.email ? 'true' : 'false'}
				className={!getValues('email') ? 'clean' : ''}
			/>
			<p
				className='error'
				role='alert'
			>
				{errors.email?.message}
			</p>

			<button
				type='submit'
				disabled={isSubmitting}
				className='btn btn-primary btn-form'
			>
				Subscribe to monthly newsletter
			</button>
		</form>
	)
}
