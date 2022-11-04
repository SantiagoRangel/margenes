import React from 'react'
import styled from 'styled-components'

const MainDiv = styled.div`
	margin-left: 3rem;
	width: 40vw;
	height: 100vh;
`
const Title = styled.p`
	margin-top: 10rem;
	font-size: 35pt;
	font-weight: 300;
	letter-spacing: 11px;
	@media only screen and (max-width: 768px) {
		font-size: 2rem;
		letter-spacing: 9px;
		width: 100%;
		margin-left: 0.2rem;
		margin-right: 0.2rem;
	}
`

const Text = styled.p`
	margin-top: 2rem;
	font-size: 20pt;
	@media only screen and (max-width: 768px) {
		font-size: 1rem;
		/* letter-spacing: 9px; */
		/* width: 100%; */
		/* margin-left: 0.2rem; */
		/* margin-right: 0.2rem; */
	}
`
export default function About2() {
	return (
		<MainDiv className='main'>
			<Title>CREEMOS EN EL PODER DE LA COMUNIDAD</Title>
			<Text>
				En el Metaverso las posibilidades son ilimitadas para todos. Lacreatividadeslaúnica regla y la imaginación
				el único límite. Todos somos dueños y creadores.
			</Text>
		</MainDiv>
	)
}
