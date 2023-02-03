import React from 'react'
import styled, { keyframes } from 'styled-components'

const MainDiv = styled.div`
	height: 100vh;
	/* scroll-snap-align: start; */
`
const IconDiv = styled.div`
	display: flex;
	justify-content: center;
	@media only screen and (max-width: 768px) {
	}
`
const breatheAnimation = keyframes`

 50% { transform: translateY(-50%); }
`
const Icon = styled.span`
	position: relative;
	top: 95vh;
	position: absolute;
	&::before {
		color: whitesmoke;
		animation-name: ${breatheAnimation};
		animation-duration: 2s;
		animation-iteration-count: infinite;
		bottom: 2rem;
		content: '╲╱';
		font-size: 1.5rem;
		letter-spacing: -1px;
		opacity: 0.8;
		position: absolute;
		text-align: center;
	}
`

export default function Empty() {
	return (
		<MainDiv>
			<IconDiv>
				<Icon />
			</IconDiv>
		</MainDiv>
	)
}
