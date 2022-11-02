import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'
import Page from './components/Page/Page'
import { Html } from '@react-three/drei'
import Scene from './components/Scene/Scene'
import { ThemeProvider } from './components/hooks/ThemeContext'

export default function App() {
	return (
		<div className='App'>
			<ThemeProvider>
				<Canvas>
					<Scene />
				</Canvas>
			</ThemeProvider>
		</div>
	)
}
