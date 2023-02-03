import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'
import Scene from './components/Scene/Scene'
import { Loader, Scroll } from '@react-three/drei'
import { ScrollControls } from '@react-three/drei'
import Page from './components/Page/Page'
import Header from './components/Page/Header'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'TSKirt';
  src: local('TSKirt'), url(./fonts/TSKirt-Regular.otf) format('opentype');
  
}
`

export default function App() {
	return (
		<div className='App'>
			<Header />

			<GlobalStyle />

			<Suspense fallback={null}>
				<Canvas>
					<ScrollControls pages={7} damping={0.15} distance={1}>
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
