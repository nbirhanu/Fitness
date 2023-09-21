import React from 'react'
import { Stack, Typography } from '@mui/material'
import { useAuth } from './AuthContext'
import icon from '../assets/icons/gym.png'

const Bpart = ({ item }) => {
	const { bodyPart, setBodyPart } = useAuth()
	return (
		<Stack
			type="button"
			alignItems="center"
			justifyContent="center"
			className="bodyPart-card"
			sx={
				bodyPart === item
					? {
							borderTop: '4px solid #FF2625',
							background: '#fff',
							borderBottomLeftRadius: '20px',
							width: '270px',
							height: '282px',
							cursor: 'pointer',
							gap: '47px',
					  }
					: {
							background: '#fff',
							borderBottomLeftRadius: '20px',
							width: '270px',
							height: '282px',
							cursor: 'pointer',
							gap: '47px',
					  }
			}
			onClick={() => {
				setBodyPart(item)
				window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
			}}>
			<img src={icon} alt="dumbell" style={{ width: '100px', height: '100px' }} />
			<Typography fontSize="24px" fontWeight="bold" color="#3A1212">
				{item}
			</Typography>
		</Stack>
	)
}

export default Bpart
