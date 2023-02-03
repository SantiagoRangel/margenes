import React from 'react'
import styled from 'styled-components'
import { ServiceContent, ServiceH1, ServiceH2 } from '../styledComponents/styled-components'

const MainDiv = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	/* scroll-snap-align: start; */

	@media only screen and (max-width: 768px) {
	}
`

const ServicesContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
`
export default function Services() {
	return (
		<MainDiv className='main'>
			<ServiceH1>SERVICIOS Y ÁREAS DE DESARROLLO</ServiceH1>
			<ServicesContainer>
				<div>
					<ServiceH2>ESTRATEGIA EMPRESARIAL WEB3.0</ServiceH2>
					<ServiceContent>Marketing Strategies Web3.0</ServiceContent>
					<ServiceContent>Aliados estratégicos</ServiceContent>
					<ServiceContent>Sponsoring Web3.0</ServiceContent>
					<ServiceContent>Simulaciones Financieras</ServiceContent>
					<ServiceContent>Eventos Interactivos</ServiceContent>
				</div>
				<div>
					<ServiceH2>DESARROLLO CREATIVO</ServiceH2>
					<ServiceContent>Colecciones NFT</ServiceContent>
					<ServiceContent>3D Animation & Graphic Design</ServiceContent>
					<ServiceContent>Motion Graphics</ServiceContent>
					<ServiceContent>Web3.0 Branding & Storyboards</ServiceContent>
					<ServiceContent>Gamification</ServiceContent>
				</div>
				<div>
					<ServiceH2>DESARROLLO WEB</ServiceH2>
					<ServiceContent>Dapp Development</ServiceContent>
					<ServiceContent>NFTs & Smart Contracts</ServiceContent>
					<ServiceContent>Marketplaces</ServiceContent>
					<ServiceContent>Tokenization</ServiceContent>
					<ServiceContent>Wallets</ServiceContent>
				</div>
			</ServicesContainer>
		</MainDiv>
	)
}
