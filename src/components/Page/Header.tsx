import React from 'react'
import styled from 'styled-components'

const HeaderDiv = styled.div`
	padding-top: 10px;
	font-size: 15pt;
	position: fixed;
	z-index: 999;
	top: 0;
	left: 0;
	right: 0;
`
const Section = styled.div`
	display: flex;
	margin-right: 2rem;
`
const DivTitle = styled.a`
	margin-left: 3rem;
	margin-right: 1rem;
	font-weight: 100;
	font-family: 'TSKirt';
	font-size: 1.5rem;
	color: whitesmoke;
	&:hover {
		cursor: pointer;
	}
`
const Flexdiv = styled.div`
	display: flex;
	justify-content: space-between;
`
export default function Header() {
	return (
		<HeaderDiv>
			<Flexdiv>
				<div>
					<DivTitle>MGL</DivTitle>
				</div>
				<Section>
					<DivTitle>WALLET </DivTitle>
					<DivTitle>SERVICES</DivTitle>
					<DivTitle>CONTACT</DivTitle>
					<DivTitle>EN</DivTitle>
				</Section>
			</Flexdiv>
		</HeaderDiv>
	)
}
