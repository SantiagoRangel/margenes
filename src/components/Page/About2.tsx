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
`

const Text = styled.p`
	margin-top: 2rem;
	font-size: 20pt;
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
