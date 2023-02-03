import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import { keyframes } from 'styled-components'
import {
	PageHeader,
	PageText,
	CallToActionDiv,
	CallToActionTitle,
	CallToActionText,
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

export default function About1() {
	return (
		<MainDiv>
			<PageHeader>Lleva tu empresa al metaverso y a los nuevos mercados de consumo.</PageHeader>
			<PageText>
				Construimos tu nueva generación de consumidores a través de estrategias y soluciones NFT & blockchain.
			</PageText>
			<CallToActionDiv>
				<CallToActionTitle>CONTÁCTANOS</CallToActionTitle>
				<CallToActionText>Agéndate a una llamada de exploración</CallToActionText>
			</CallToActionDiv>
		</MainDiv>
	)
}
