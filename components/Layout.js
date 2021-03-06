import { Grid, Cell } from 'styled-css-grid';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

import { LayoutWrapper, GlobalStyle, PageWrapper } from '../styles/components';

const Layout = props => (
  <PageWrapper>
    <LayoutWrapper>
      <GlobalStyle />
      <Header />
      <Grid gap="0px" rows={10} height="45px">
        {props.children}
      </Grid>
      <Footer />
    </LayoutWrapper>
  </PageWrapper>
);

Layout.propTypes = {
  children: PropTypes.array
};

export default Layout;
