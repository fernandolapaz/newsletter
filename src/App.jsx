import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout'
import SignUp from './pages/SignUp'
import Success from './pages/Success'
import NoPage from './pages/NoPage'

export default function App() {
	const [userEmail, setUserEmail] = React.useState(
		localStorage.getItem('userEmail') || ''
	)

	const handleFormData = data => {
		setUserEmail(data)
	}

	localStorage.setItem('userEmail', userEmail)

	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					index: true,
					element: <SignUp handleFormData={handleFormData} />,
				},
				{
					path: 'success',
					element: <Success userEmail={userEmail} />,
				},
				{
					path: '*',
					element: <NoPage />,
				},
			],
		},
	])

	return <RouterProvider router={router} />
}
