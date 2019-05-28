import Header from "./Header";
import styled, { createGlobalStyle } from "styled-components";

const LayoutWrapper = styled.div`
	color: #3d1f68;
`;

const GlobalStyle = createGlobalStyle`
  body {
		margin: 0;
		padding: 0;

		@import url('https://fonts.googleapis.com/css?family=Dosis');
		font-family: 'Dosis', sans-serif;

		background-color: #efefef;

		text-align: center;
	}

`;

const Layout = props => (
	<LayoutWrapper>
		<GlobalStyle />
		<Header />
		{props.children}
	</LayoutWrapper>
);

export default Layout;
