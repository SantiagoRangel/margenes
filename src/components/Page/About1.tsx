import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const MainDiv = styled.div`
	margin-left: 3rem;
	display: flex;
	width: 55vw;
	height: 100vh;
`
const Text = styled.p`
	margin-top: 5rem;
	font-size: 50pt;
	font-weight: 300;
	letter-spacing: 11px;
`
export default function About1() {
	return (
		<>
			<Header />
			<MainDiv>
				<Text>CONSTRUYENDO EL METAVERSO A TRAVÉS DE EXPERIENCIAS, COMUNIDADES, IMAGINACIÓN.</Text>
			</MainDiv>
		</>
	)
}
