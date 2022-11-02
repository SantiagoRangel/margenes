import React, { useContext, useEffect, useState } from 'react'

// const context = { mobile: false }
// @ts-ignore
const ThemeContext = React.createContext()
// @ts-ignore
const ThemeUpdateContext = React.createContext()

export function useTheme() {
	return useContext(ThemeContext)
}
export function ThemeProvider({ children }: any) {
	const [mobile, setMobile] = useState(false)

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth <= 696) {
				console.log('hola')
			}
			window.innerWidth <= 696 ? setMobile(true) : setMobile(false)
		})
	}, [])

	return <ThemeContext.Provider value={mobile}>{children}</ThemeContext.Provider>
}
