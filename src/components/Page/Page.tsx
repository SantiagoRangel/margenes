import React from 'react'
import styled from 'styled-components'
import About1 from './About1'
import About2 from './About2'
import About3 from './About3'
import Contact from './Contact'
import Empty from './Empty'
import MintPage from './MintPage'
import Services from './Services'

const PageDiv = styled.div`
	z-index: 1;
	position: absolute;
	width: 100vw;
	margin-top: 000px;
	overflow-y: scroll;

	// con esto sirve el snapping!
	/* height: 100vh; */
	/* scroll-snap-type: y mandatory; */
`

export default function Page() {
	return (
		<div>
			<PageDiv>
				<Empty />

				<About1 />
				<About2 />
				<About3 />
				<Services />
				<MintPage />
				<Contact />
			</PageDiv>
		</div>
	)
}
