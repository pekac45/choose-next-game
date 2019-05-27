import Link from "next/link";
import styled from "styled-components";
import { Grid, Cell } from "styled-css-grid";

const HeaderWrapper = styled.div`
	border-bottom: 3px solid black;
	width: 100vw;
	height: 50px;
	position: relative;
`;

const LinkWrapper = styled.a`
	position: relative;
	color: purple;
	top: 30%;

	justify-self: center;
`;

const Header = () => (
	<HeaderWrapper>
		<Grid>
			<Cell>
				<Link href="/">
					<LinkWrapper>Home</LinkWrapper>
				</Link>
			</Cell>
			<Cell>
				<Link href="/Add">
					<LinkWrapper left={10}>Add</LinkWrapper>
				</Link>
			</Cell>
			<Cell>
				<Link href="/Edit">
					<LinkWrapper left={11}>Edit</LinkWrapper>
				</Link>
			</Cell>
			<Cell left={12}>
				<Link href="/Logout">
					<LinkWrapper>Logout</LinkWrapper>
				</Link>
			</Cell>
		</Grid>
	</HeaderWrapper>
);

export default Header;
