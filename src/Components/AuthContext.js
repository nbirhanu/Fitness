import React, { createContext, useContext } from 'react'
import { useState } from 'react'
const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
	const [search, setSearch] = useState('')
	const [exercise, setExercise] = useState([])
	const [bodyParts, setBodyParts] = useState([])
	const [bodyPart, setBodyPart] = useState([])
	const value = {
		search,
		setSearch,
		exercise,
		setExercise,
		bodyPart,
		setBodyPart,
		bodyParts,
		setBodyParts,
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = function () {
	const context = useContext(AuthContext)
	if (context === undefined) throw new Error('Some thing is wrong')
	return context
}
