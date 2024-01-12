import React from 'react'
import { Outlet } from 'react-router-dom'
import Theme from '../components/Theme'
import Attribution from '../components/Attribution'

export default function Layout() {
	return (
		<>
			<header>
				<Theme />
			</header>

			<Outlet />

			<footer>
				<Attribution />
			</footer>
		</>
	)
}
