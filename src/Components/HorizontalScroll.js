import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import { useAuth } from './AuthContext'
import Bpart from './Bpart'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'
//
const LeftArrow = () => {
	const { scrollPrev } = useContext(VisibilityContext)

	return (
		<Typography onClick={() => scrollPrev()} className="right-arrow">
			<img src={LeftArrowIcon} alt="right-arrow" />
		</Typography>
	)
}

const RightArrow = () => {
	const { scrollNext } = useContext(VisibilityContext)

	return (
		<Typography onClick={() => scrollNext()} className="left-arrow">
			<img src={RightArrowIcon} alt="right-arrow" />
		</Typography>
	)
}
//
const HorizontalScroll = () => {
	const { bodyParts, setBodyParts } = useAuth()
	return (
		<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
			{bodyParts.map(item => (
				<Box key={item.id || item} itemID={item.id || item} tittle={item.id || item} m="0 40px">
					<Bpart item={item} />
				</Box>
			))}
		</ScrollMenu>
	)
}

export default HorizontalScroll
