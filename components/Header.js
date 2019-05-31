import Link from "next/link";
import { HeaderWrapper, LinkWrapper } from "../styles/components";
import { Grid, Cell } from "styled-css-grid";

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
