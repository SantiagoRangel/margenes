import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'
import Scene from './components/Scene/Scene'
import { Loader, Scroll } from '@react-three/drei'
import { ScrollControls } from '@react-three/drei'
import Page from './components/Page/Page'

export default function App() {
	return (
		<div className='App'>
			<Suspense fallback={null}>
				<Canvas>
					<ScrollControls pages={3} damping={4} distance={1}>
						<Scene />
						<Scroll html>
							<Page />
						</Scroll>
					</ScrollControls>
				</Canvas>
			</Suspense>

			<Loader />
		</div>
	)
}
