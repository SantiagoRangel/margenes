import React from 'react'
import styled from 'styled-components'
const MainDiv = styled.div`
	margin-left: 3rem;
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	/* scroll-snap-align: start; */

	@media only screen and (max-width: 768px) {
	}
`

const ContactH1 = styled.h1`
	font-family: 'TSKirt';
	color: whitesmoke;
	font-size: 65pt;
	font-weight: 300;
	line-height: 77px;

	@media only screen and (max-width: 768px) {
	}
`
const ContactH2 = styled.h2`
	font-family: 'TSKirt';
	color: rgb(245, 245, 245);
	font-size: 18pt;
	font-weight: 300;
	margin-top: -60px;
	text-decoration: underline;

	@media only screen and (max-width: 768px) {
	}
`
export default function Contact() {
	return (
		<MainDiv className='main'>
			<ContactH1>PÓNTE EN CONTACTO</ContactH1>
			<ContactH2>AGÉNDATE A UNA LLAMADA DE EXPLORACIÓN</ContactH2>
		</MainDiv>
	)
}
