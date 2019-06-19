import Link from 'next/link';
import { Grid, Cell } from 'styled-css-grid';
import { HeaderWrapper, LinkWrapper } from '../styles/components';

const Header = () => (
  <HeaderWrapper>
    <Grid rows="50px" gap="0px">
      <Cell center middle>
        <Link href="/">
          <LinkWrapper>Home</LinkWrapper>
        </Link>
      </Cell>
      <Cell left={10} center middle>
        <Link href="/Add">
          <LinkWrapper>Add Game</LinkWrapper>
        </Link>
      </Cell>
      <Cell left={11} center middle>
        <Link href="/Edit">
          <LinkWrapper>Edit Game</LinkWrapper>
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
