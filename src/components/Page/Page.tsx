import React from 'react'
import styled from 'styled-components'
import About1 from './About1'
import About2 from './About2'

interface Props {}

const PageDiv = styled.div`
	z-index: 1;
	position: absolute;
	width: 100vw;
	margin-top: 000px;
`
const Empty = styled.div`
	height: 80vh;
`
export default function Page() {
	return (
		<PageDiv>
			<Empty />

			<About1 />
			<About2 />
		</PageDiv>
	)
}
