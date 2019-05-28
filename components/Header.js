import Link from "next/link";
import styled from "styled-components";
import { Grid, Cell } from "styled-css-grid";

const HeaderWrapper = styled.div`
	border-bottom: 3px solid #3d1f68;
	width: 100vw;
	height: 50px;
`;

const LinkWrapper = styled.button`
	color: #3d1f68;
	text-transform: uppercase;
	font-family: "Dosis", sans-serif;
	font-size: inherit;
	background-color: transparent;
	height: 100%;
	cursor: pointer;

	border: none;
	text-align: center;
	text-decoration: none;

	transition: 0.3s;

	:hover {
		color: #efefef;
		background-color: #3d1f68;
	}
`;

const Header = () => (
	<HeaderWrapper>
		<Grid rows={"50px"} gap={"0px"}>
			<Cell center middle>
				<Link href="/">
					<LinkWrapper>Home</LinkWrapper>
				</Link>
			</Cell>
			<Cell left={10} center middle>
				<Link href="/Add">
					<LinkWrapper left={10}>Add Game</LinkWrapper>
				</Link>
			</Cell>
			<Cell left={11} center middle>
				<Link href="/Edit">
					<LinkWrapper left={11}>Edit Game</LinkWrapper>
				</Link>
			</Cell>
			<Cell left={12} center middle>
				<Link href="/Logout">
					<LinkWrapper>Logout</LinkWrapper>
				</Link>
			</Cell>
		</Grid>
	</HeaderWrapper>
);

export default Header;
