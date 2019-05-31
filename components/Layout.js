import { Grid, Cell } from "styled-css-grid";

import Header from "./Header";

import { LayoutWrapper, GlobalStyle } from "../styles/components";

const Layout = props => (
	<LayoutWrapper>
		<GlobalStyle />
		<Header />
		<Grid gap={"0px"} rows={10} height={"45px"}>
			{props.children}
		</Grid>
	</LayoutWrapper>
);

export default Layout;
