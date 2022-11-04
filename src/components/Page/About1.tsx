import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import { keyframes } from 'styled-components'

const MainDiv = styled.div`
	margin-left: 3rem;
	display: flex;
	width: 55vw;
	height: 100vh;
	pointer-events: none;
	@media only screen and (max-width: 768px) {
	}
`
const AboutDiv = styled.div`
	margin-top: 3rem;

	@media only screen and (max-width: 768px) {
	}
`

const IconDiv = styled.div`
	display: flex;
	justify-content: center;
	@media only screen and (max-width: 768px) {
	}
`
const Text = styled.p`
	margin-top: 5rem;
	font-size: 50pt;
	font-weight: 200;
	letter-spacing: 9px;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	@media only screen and (max-width: 768px) {
		font-size: 2rem;
		letter-spacing: 9px;
		width: 100%;
		margin-left: 0.2rem;
		margin-right: 0.2rem;
	}
`
const breatheAnimation = keyframes`

 50% { transform: translateY(-50%); }
`
const Icon = styled.span`
	position: relative;
	&::before {
		animation-name: ${breatheAnimation};
		animation-duration: 2s;
		animation-iteration-count: infinite;
		bottom: 2rem;
		color: #fff;
		content: '╲╱';
		font-size: 2rem;
		letter-spacing: -1px;
		opacity: 0.8;
		position: absolute;
		text-align: center;
	}
`

export default function About1() {
	return (
		<AboutDiv>
			<IconDiv>
				<Icon />
			</IconDiv>

			<Header />
			<MainDiv>
				<Text>CONSTRUYENDO EL METAVERSO A TRAVÉS DE EXPERIENCIAS, COMUNIDADES, IMAGINACIÓN.</Text>
			</MainDiv>
		</AboutDiv>
	)
}
