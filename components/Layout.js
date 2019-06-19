import { Grid, Cell } from 'styled-css-grid';

import Header from './Header';
import Footer from './Footer';

import { LayoutWrapper, GlobalStyle } from '../styles/components';

const Layout = props => (
  <LayoutWrapper>
    <GlobalStyle />
    <Header />
    <Grid gap="0px" rows="minmax(45px,auto) 1fr 3.50rem 3.50rem 1fr 1fr 1fr 1fr 1fr" columns={12}>
      {props.children}
    </Grid>
    <Footer />
  </LayoutWrapper>
);

export default Layout;
