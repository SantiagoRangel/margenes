import styled from 'styled-components'

const PageHeader = styled.h1`
	font-family: 'TSKirt';
	color: whitesmoke;
	font-size: 57pt;
	font-weight: 300;
	width: 32rem;
	line-height: 72px;
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
const MintHeader = styled.h1`
	font-family: 'TSKirt';
	color: whitesmoke;
	font-size: 65pt;
	font-weight: 300;
	width: 36rem;
	line-height: 77px;

	@media only screen and (max-width: 768px) {
	}
`

const Minth2 = styled.h2`
	font-family: 'TSKirt';
	color: rgb(245, 245, 245);
	font-size: 18pt;
	font-weight: 600;
	line-height: 40px;
	margin-top: -2rem;
	@media only screen and (max-width: 768px) {
	}
`

const MintContent = styled.p`
	font-family: 'TSKirt';
	color: rgb(245, 245, 245);
	font-size: 16pt;
	font-weight: 300;
	margin: 0;
	line-height: 24px;
	letter-spacing: -1px;
	@media only screen and (max-width: 768px) {
	}
`

const MintCTA = styled.p`
	font-family: 'TSKirt';
	color: rgb(245, 245, 245);
	font-size: 18pt;
	font-weight: 300;
	margin-top: 1rem;
	text-decoration: underline;
	max-width: 110px;
	&:hover {
		cursor: pointer;
	}
	@media only screen and (max-width: 768px) {
	}
`

const PageText = styled.h2`
	font-family: 'TSKirt';
	color: whitesmoke;
	font-size: 20pt;
	font-weight: 300;
	width: 24rem;
	line-height: 25px;
	letter-spacing: -1px;
	margin-top: -30px;
`

const CallToActionDiv = styled.div`
	border: 3px solid white;
	padding: 0;
	width: 19rem;
	display: flex;
	flex-direction: column;
	&:hover {
		cursor: pointer;
	}
`

const CallToActionTitle = styled.p`
	font-family: 'TSKirt';
	color: whitesmoke;
	font-size: 2.5rem;
	font-weight: 300;
	text-align: center;
	letter-spacing: -1px;
	margin: -3px 0 0 0;
`
const CallToActionText = styled.p`
	font-family: 'TSKirt';
	color: whitesmoke;
	font-size: 1rem;
	font-weight: 300;
	text-align: center;
	letter-spacing: -1px;
	margin: 0;
	margin: -17px 0 4px 0;
`

const ServiceH1 = styled.h1`
	font-family: 'TSKirt';
	color: whitesmoke;
	font-size: 57pt;
	font-weight: 300;
	line-height: 72px;
	text-align: center;
	margin-top: 22rem;
	@media only screen and (max-width: 768px) {
	}
`
const ServiceH2 = styled.h2`
	font-family: 'TSKirt';
	color: rgb(245, 245, 245);
	font-size: 23pt;
	font-weight: 600;
	line-height: 40px;
	max-width: 20rem;
	@media only screen and (max-width: 768px) {
	}
`

const ServiceContent = styled.p`
	font-family: 'TSKirt';
	color: rgb(245, 245, 245);
	font-size: 13pt;
	font-weight: 300;
	margin-top: 0;
	line-height: 3px;
	@media only screen and (max-width: 768px) {
	}
`
export {
	PageHeader,
	PageText,
	CallToActionDiv,
	CallToActionText,
	CallToActionTitle,
	ServiceContent,
	ServiceH1,
	ServiceH2,
	MintHeader,
	Minth2,
	MintContent,
	MintCTA,
}
