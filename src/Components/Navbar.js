import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png'
import styles from './Navbar.module.css'

const Navbar = () => {
	return (
		<Stack
			direction="row"
			justifyContent="space-around"
			px="20px"
			sx={{
				gap: { sm: '122px', xm: '40px' },
				mt: { sm: '32px', xm: '20px' },
				justifyContent: 'none',
			}}>
			<Link to="/">
				<img src={Logo} alt="Logo" className={styles.logo} />
			</Link>
			<Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
				<Link to="/" className={styles.homeLink}>
					Home
				</Link>
				<a href="#exercise" className={styles.exerciseLink}>
					Exercise
				</a>
			</Stack>
		</Stack>
	)
}

export default Navbar
