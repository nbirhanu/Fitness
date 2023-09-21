import React from 'react'
import Banner from '../assets/images/banner.png'
import { Box, Typography, Stack, Button } from '@mui/material'

const Herobanner = () => {
	return (
		<Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '80px' } }}>
			<Typography color="#FF2625" fontWeight="600" fontSize="26" position="relative" padding="10px">
				Fitness club
			</Typography>
			<Typography fontWeight={600} sx={{ fontSize: { lg: '44	px', sm: '40px' } }}>
				Sweat, Smile <br /> and Reapeat
			</Typography>
			<Typography fontSize={22} lineHeight={3}>
				Cheak out the most efective exercise
			</Typography>
			<Button variant="contained" color="error">
				Explore Exercise
			</Button>
			<Typography
				fontWeight={600}
				fontSize={200}
				mt="125px"
				sx={{ opacity: '0.1', display: { lg: 'block', sm: 'none', xs: 'none' } }}>
				Exercise
			</Typography>
			<img src={Banner} alt="banner" className="hero-banner-img" />
		</Box>
	)
}

export default Herobanner
