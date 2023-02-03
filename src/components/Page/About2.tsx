import React from 'react'
import styled from 'styled-components'
import {
	CallToActionDiv,
	CallToActionText,
	CallToActionTitle,
	PageHeader,
	PageText,
} from '../styledComponents/styled-components'

const MainDiv = styled.div`
	margin-left: 3rem;
	display: flex;
	flex-direction: column;
	width: 55vw;
	height: 100vh;
	/* scroll-snap-align: start; */
	@media only screen and (max-width: 768px) {
	}
`
export default function About2() {
	return (
		<MainDiv className='main'>
			<PageHeader>Creemos en el poder de la comunidad.</PageHeader>
			<PageText>
				Construimos estrategias empresariales Web3.0 y colecciones NFT que atraen, retienen y capitalizan nuevas
				audiencias para nuestros clientes.
			</PageText>
			<CallToActionDiv>
				<CallToActionTitle>CONTÁCTANOS</CallToActionTitle>
				<CallToActionText>Agéndate a una llamada de exploración</CallToActionText>
			</CallToActionDiv>
		</MainDiv>
	)
}
