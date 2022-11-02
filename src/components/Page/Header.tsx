import React from 'react'
import styled from 'styled-components'

const HeaderDiv = styled.div`
	display: flex;
	font-size: 15pt;
	justify-content: space-between;
	position: -webkit-sticky;
	position: sticky;
	top: 0;
`
const Section = styled.div`
	display: flex;
	margin-right: 2rem;
`
const DivTitle = styled.h2`
	margin-left: 3rem;
	margin-right: 1rem;
	font-weight: 200;
`
export default function Header() {
	return (
		<HeaderDiv>
			<div>
				<DivTitle>MGL</DivTitle>
			</div>
			<Section>
				<DivTitle>WALLET </DivTitle>
				<DivTitle>SERVICES</DivTitle>
				<DivTitle>CONTACT</DivTitle>
				<DivTitle>EN</DivTitle>
			</Section>
		</HeaderDiv>
	)
}
