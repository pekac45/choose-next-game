// eslint-disable-next-line no-unused-vars
import { Grid, Cell } from 'styled-css-grid';
import Layout from '../components/Layout';
import GameList from '../components/Table';

const Index = () => (
  <Layout>
    <Cell left={5} width={4} center>
      <h1>Choose next game</h1>
    </Cell>
    <Cell left={4} width={10} top={3}>
      <GameList />
    </Cell>
  </Layout>
);

export default Index;
