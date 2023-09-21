import React from 'react'
import { Stack, Typography, Box } from '@mui/material'

const DetailExercise = ({ exerciseDetail }) => {
	const { target, name, gifUrl } = exerciseDetail
	return (
		<Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
			<img src={gifUrl} alt={name} className="detail-image" />
			<Stack>
				<Typography
					sx={{ fontSize: { lg: '50px', xs: '20px' } }}
					fontWeight={700}
					textTransform="capitalize">
					{name}
				</Typography>
				<Typography sx={{ fontSize: { lg: '18px', xs: '14px' } }} color="#4F4C4C">
					Exercises keep you strong. <span style={{ textTransform: 'capitalize' }}>{name}</span> bup
					is one of the best <br /> exercises to target your {target}. It will help you improve your{' '}
					<br /> mood and gain energy.
				</Typography>
			</Stack>
		</Stack>
	)
}

export default DetailExercise
