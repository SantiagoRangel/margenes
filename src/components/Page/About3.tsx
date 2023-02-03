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
		<MainDiv className='main' id='scroll'>
			<PageHeader>En el metaverso hay espacio para todos.</PageHeader>
			<PageText>
				En nuestra experiencia de más de 14 años como banca de inversión, hemos ayudado a las empresas más grandes
				del país a potenciar sus finanzas. Ahora, con la misma transparencia y confianza, conectamos el Metaverso y
				la Web3.0 a tu empresa a través de la tecnología blockchain y los NFTs.
			</PageText>
			<CallToActionDiv>
				<CallToActionTitle>CONTÁCTANOS</CallToActionTitle>
				<CallToActionText>Agéndate a una llamada de exploración</CallToActionText>
			</CallToActionDiv>
		</MainDiv>
	)
}
