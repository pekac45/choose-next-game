import { Grid, Cell } from 'styled-css-grid';
import { FooterWrapper, AnchorWrapper } from '../styles/components';

const Header = () => (
  <FooterWrapper>
    <Grid rows="50px" gap="0px" columns={9}>
      <Cell center middle left={4}>
        <AnchorWrapper href="https://pekar.space">Made by</AnchorWrapper>
      </Cell>
      <Cell center middle left={5}>
        <AnchorWrapper href="https://github.com/pekac45/choose-next-game">
          See source code
        </AnchorWrapper>
      </Cell>
      <Cell center middle left={6}>
        <AnchorWrapper href="https://opensource.org/licenses/MIT">License</AnchorWrapper>
      </Cell>
    </Grid>
  </FooterWrapper>
);

export default Header;
