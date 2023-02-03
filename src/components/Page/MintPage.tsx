import React from 'react'
import styled from 'styled-components'
import { MintContent, MintCTA, Minth2, MintHeader } from '../styledComponents/styled-components'

const MainDiv = styled.div`
	display: flex;
	flex-direction: column;
	/* width: 55vw; */
	padding-top: 7rem;
	padding-left: 3rem;
	height: 100vh;
	/* scroll-snap-align: start; */

	@media only screen and (max-width: 768px) {
	}
`
export default function MintPage() {
	return (
		<MainDiv className='main'>
			<MintHeader>ÚNETE A NUESTRA COMUNIDAD DE CLIENTES</MintHeader>
			<Minth2>El MGLPass, es nuestro NFT de acceso. Te dará beneficios como:</Minth2>
			<MintContent>Estudio empresarial & Estrategia Web3.0</MintContent>
			<MintContent>Acceso a grupo directo con nuestro equipo</MintContent>
			<MintContent>Acceso a información actualizada de la industria Web3.0</MintContent>
			<MintContent>Primer coleccionable NFT MGL</MintContent>
			<MintCTA>MINT NOW</MintCTA>
		</MainDiv>
	)
}
